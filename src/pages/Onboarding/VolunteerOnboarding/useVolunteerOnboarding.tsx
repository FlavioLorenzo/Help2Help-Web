import {useReducer} from "react";

import {
    initialState,
    reducer,
    VolunteerOnboardingType,
    VolunteerOnboardingActionKind,
} from "./VolunteerOnboarding.reducer";

import useToast from "../../../components/ui/Toast/useToast";
import {useHistory} from "react-router";
import {useUserService} from "../../../services/users/users";

import {SearchLocationInputType} from "../../../components/ui/SearchLocationInput/SearchLocationInput.types";
import VolunteerOnboardingStep1 from "./Step1/VolunteerOnboardingStep1";
import VolunteerOnboardingStep2 from "./Step2/VolunteerOnboardingStep2";
import VolunteerOnboardingStep3 from "./Step3/VolunteerOnboardingStep3";
import VolunteerOnboardingStep4 from "./Step4/VolunteerOnboardingStep4";
import VolunteerOnboardingStep5 from "./Step5/VolunteerOnboardingStep5";
import {useFieldsOfInterestService} from "../../../services/fieldsOfInterest/fieldsOfInterest";
import {AvailabilityType} from "../../../types/AvailabilityType";
import {
    onboardingVolunteerOnSubmitFieldsOfInterestError,
    onboardingVolunteerOnSubmitLocationError,
    onboardingVolunteerOnSubmitAvailabilitiesError,
    onboardingVolunteerOnSubmitOtherError,
    onboardingVolunteerStep1Welcome,
    onboardingVolunteerStepFieldTitle,
    onboardingVolunteerStepLocationTitle, onboardingVolunteerStepAvailabilitiesTitle, onboardingVolunteerFinalStepTitle
} from "./VolunteerOnboarding.translations";

export default function useVolunteerOnboarding() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {
        setToastErrorMessage,
        toastGenericTranslations,
    } = useToast();

    const {onboardVolunteer} = useUserService();
    const history = useHistory();

    const {fieldsOfInterest} = useFieldsOfInterestService();

    const previousClicked = () => {
        dispatch({type: VolunteerOnboardingActionKind.PREVIOUS});
    };

    const nextClicked = () => {
        dispatch({type: VolunteerOnboardingActionKind.NEXT});
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

    const setAvailabilities = (value: AvailabilityType) => {
        dispatch({
            type: VolunteerOnboardingActionKind.SET_AVAILABILITIES,
            availabilities: value,
        });
    };

    const displayTitle = () => {
        switch (state.currentStep) {
            case 1:
                return (
                    <h1 className="full-gradient-title full-gradient-big-title">{onboardingVolunteerStep1Welcome}</h1>
                );
            case 2:
                return (<h1 className="full-gradient-title">{onboardingVolunteerStepFieldTitle}</h1>);
            case 3:
                return (<h1 className="full-gradient-title">{onboardingVolunteerStepLocationTitle}</h1>);
            case 4:
                return (<h1 className="full-gradient-title">{onboardingVolunteerStepAvailabilitiesTitle}</h1>);
            case 5:
                return (
                    <h1 className="full-gradient-title full-gradient-big-title">{onboardingVolunteerFinalStepTitle}</h1>
                );
            default:
                break;
        }
    };

    const displayStep = () => {
        switch (state.currentStep) {
            case 1:
                return <VolunteerOnboardingStep1/>;
            case 2:
                return (
                    <VolunteerOnboardingStep2
                        availableFields={fieldsOfInterest}
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
                return (
                    <VolunteerOnboardingStep4
                        selectedAvailabilities={state.availabilities}
                        onChanged={setAvailabilities}
                    />);
            case 5:
                return <VolunteerOnboardingStep5/>;
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
                onboardingVolunteerOnSubmitFieldsOfInterestError
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
                onboardingVolunteerOnSubmitLocationError
            );
            return;
        }

        // No fields of interest were provided, output an error
        if (Object.keys(state.availabilities).length === 0) {
            setToastErrorMessage(
                toastGenericTranslations.titleStandardInformalError,
                onboardingVolunteerOnSubmitAvailabilitiesError
            );
            return;
        }

        // Fallback error for whatever reason
        if (currentState.currentStep !== currentState.lastValidStep) {
            setToastErrorMessage(
                toastGenericTranslations.titleStandardInformalError,
                onboardingVolunteerOnSubmitOtherError
            );
            return;
        }

        onboardVolunteer(
            currentState.fieldsOfInterest,
            currentState.locationInput,
            currentState.availabilities
        ).then(() => history.push("/"));
    };

    return {
        state,
        previousClicked,
        nextClicked,
        displayTitle,
        displayStep,
        handleSubmit,
    };
}
