import { useReducer } from "react";

import {
    initialState,
    reducer,
    VolunteerOnboardingType,
    VolunteerOnboardingActionKind,
} from "./VolunteerOnboarding.reducer";

import useToast from "../../../components/ui/Toast/useToast";
import { useHistory } from "react-router";
import { useUserService } from "../../../services/users/users";

import { SearchLocationInputType } from "../../../components/ui/SearchLocationInput/SearchLocationInput.types";
import VolunteerOnboardingStep1 from "./Step1/VolunteerOnboardingStep1";
import VolunteerOnboardingStep2 from "./Step2/VolunteerOnboardingStep2";
import VolunteerOnboardingStep3 from "./Step3/VolunteerOnboardingStep3";
import VolunteerOnboardingStep4 from "./Step4/VolunteerOnboardingStep4";

export default function useVolunteerOnboarding() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {
        setToastErrorMessage,
        toastGenericTranslations,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        toastAuthTranslations,
    } = useToast();

    const { onboardVolunteer } = useUserService();
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
                        value={state.locationInput}
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
                currentState.locationInput?.formatted_address &&
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
        if (currentState.currentStep !== currentState.lastValidStep) {
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

    return {
        state,
        previousClicked,
        nextClicked,
        displayStep,
        handleSubmit,
    };
}
