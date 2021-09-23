import { useReducer } from "react";
import { updateObject } from "../../../shared/miscUtils";
import useToast from "../../../components/UI/Toast/useToast";

import FullGradientFormMultiStepMenu from "../../../components/UI/FullGradientFormMultiStepMenu/FullGradientFormMultiStepMenu";
import VolunteerOnboardingStep1 from "./Step1/VolunteerOnboardingStep1";
import VolunteerOnboardingStep2 from "./Step2/VolunteerOnboardingStep2";
import VolunteerOnboardingStep3 from "./Step3/VolunteerOnboardingStep3";
import { SearchLocationInputType } from "../../../components/UI/SearchLocationInput/SearchLocationInput.types";
import VolunteerOnboardingStep4 from "./Step4/VolunteerOnboardingStep4";
import { useAuth } from "../../../contexts/AuthContext";
import { useHistory } from "react-router";

enum VolunteerOnboardingActionKind {
    NEXT = "NEXT",
    PREVIOUS = "PREVIOUS",
    SET_FIELDS_OF_INTEREST = "SET_FIELDS_OF_INTEREST",
    SET_LOCATION_INPUT = "SET_LOCATION_INPUT",
}

interface VolunteerOnboardingAction {
    type: VolunteerOnboardingActionKind;
    fieldsOfInterest?: Array<string>;
    locationInput?: SearchLocationInputType;
}

interface VolunteerOnboardingType {
    currentStep: number;
    fieldsOfInterest: Array<string>;
    lastValidStep: number;
    locationInput: SearchLocationInputType | null;
}

const initialState: VolunteerOnboardingType = {
    currentStep: 1,
    fieldsOfInterest: [],
    lastValidStep: 1,
    locationInput: null,
};

const reducer = (
    state: VolunteerOnboardingType,
    action: VolunteerOnboardingAction
) => {
    switch (action.type) {
        case VolunteerOnboardingActionKind.NEXT:
            return updateObject(state, { currentStep: state.currentStep + 1 });
        case VolunteerOnboardingActionKind.PREVIOUS:
            return updateObject(state, { currentStep: state.currentStep - 1 });
        case VolunteerOnboardingActionKind.SET_FIELDS_OF_INTEREST:
            if (!action.fieldsOfInterest) return state;
            return updateObject(state, {
                fieldsOfInterest: [...action.fieldsOfInterest],
                lastValidStep: action.fieldsOfInterest.length > 0 ? 2 : 1,
            });
        case VolunteerOnboardingActionKind.SET_LOCATION_INPUT:
            if (!action.locationInput) return state;
            return updateObject(state, {
                locationInput: action.locationInput,
                lastValidStep: action.locationInput ? 4 : 2,
            });
    }
};

const VolunteerOnboarding = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {
        setToastErrorMessage,
        toastGenericTranslations,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        toastAuthTranslations,
    } = useToast();

    const { onboardVolunteer } = useAuth();
    const history = useHistory();

    const previousClicked = () => {
        dispatch({ type: VolunteerOnboardingActionKind.PREVIOUS });
    };

    const nextClicked = () => {
        dispatch({ type: VolunteerOnboardingActionKind.NEXT });
    };

    const setFieldsOfInterest = (fieldsOfInterest: Array<string>) => {
        dispatch({
            type: VolunteerOnboardingActionKind.SET_FIELDS_OF_INTEREST,
            fieldsOfInterest: fieldsOfInterest,
        });
    };

    const setLocationInput = (value: SearchLocationInputType) => {
        dispatch({
            type: VolunteerOnboardingActionKind.SET_LOCATION_INPUT,
            locationInput: value,
        });
    };

    const displayStep = () => {
        switch (state.currentStep) {
            case 1:
                return <VolunteerOnboardingStep1 />;
            case 2:
                return (
                    <VolunteerOnboardingStep2
                        selectedFields={state.fieldsOfInterest}
                        onChanged={setFieldsOfInterest}
                    />
                );
            case 3:
                return (
                    <VolunteerOnboardingStep3
                        value={state.locationInput?.label}
                        onChanged={setLocationInput}
                    />
                );
            case 4:
                return <VolunteerOnboardingStep4 />;
            default:
                break;
        }
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const currentState: VolunteerOnboardingType = state;

        // No fields of interest were provided, output an error
        if (currentState.fieldsOfInterest.length === 0) {
            setToastErrorMessage(
                toastGenericTranslations.titleStandardInformalError,
                "Dottore! Seleziona almeno un ambito di interesse."
            );
            return;
        }

        // No location was provided
        if (
            !(
                currentState.locationInput?.label &&
                currentState.locationInput?.coordinates
            )
        ) {
            setToastErrorMessage(
                toastGenericTranslations.titleStandardInformalError,
                "Devi inserire un indirizzo o città."
            );
            return;
        }

        // Fallback error for whatever reason
        if (
            !onboardVolunteer ||
            currentState.currentStep !== currentState.lastValidStep
        ) {
            setToastErrorMessage(
                toastGenericTranslations.titleStandardInformalError,
                "Si è verificato un errore inatteso."
            );
            return;
        }

        onboardVolunteer(
            currentState.fieldsOfInterest,
            currentState.locationInput
        ).then(() => history.push("/"));
    };

    return (
        <>
            <div className="full-gradient-form-section">
                <form className="onboarding-form" onSubmit={handleSubmit}>
                    <div className="onboarding-form-step">{displayStep()}</div>

                    <FullGradientFormMultiStepMenu
                        totalSteps={4}
                        currentStep={state.currentStep}
                        leftClicked={previousClicked}
                        rightClicked={nextClicked}
                        rightDisabled={state.currentStep > state.lastValidStep}
                    />
                </form>
            </div>
        </>
    );
};

export default VolunteerOnboarding;
