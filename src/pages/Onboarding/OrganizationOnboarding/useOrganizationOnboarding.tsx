import {useReducer} from "react";

import {
    initialState,
    reducer,
    OrganizationOnboardingType,
    OrganizationOnboardingActionKind,
} from "./OrganizationOnboarding.reducer";

import useToast from "../../../components/ui/Toast/useToast";
import {useHistory} from "react-router";
import {useUserService} from "../../../services/users/users";

import {SearchLocationInputType} from "../../../components/ui/SearchLocationInput/SearchLocationInput.types";
import OrganizationOnboardingStep1 from "./Step1/OrganizationOnboardingStep1";
import OrganizationOnboardingStep2 from "./Step2/OrganizationOnboardingStep2";
import OrganizationOnboardingStep3 from "./Step3/OrganizationOnboardingStep3";
import OrganizationOnboardingStep4 from "./Step4/OrganizationOnboardingStep4";
import OrganizationOnboardingStep5 from "./Step5/OrganizationOnboardingStep5";
import {useFieldsOfInterestService} from "../../../services/fieldsOfInterest/fieldsOfInterest";
import {AvailabilityType} from "../../../types/AvailabilityType";
import {
    onboardingOrganizationOnSubmitFieldsOfInterestError,
    onboardingOrganizationOnSubmitLocationError,
    onboardingOrganizationOnSubmitAvailabilitiesError,
    onboardingOrganizationOnSubmitOtherError
} from "./OrganizationOnboarding.translations";

export default function useOrganizationOnboarding() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {
        setToastErrorMessage,
        toastGenericTranslations,
    } = useToast();

    const {onboardOrganization} = useUserService();
    const history = useHistory();

    const {fieldsOfInterest} = useFieldsOfInterestService();

    const previousClicked = () => {
        dispatch({type: OrganizationOnboardingActionKind.PREVIOUS});
    };

    const nextClicked = () => {
        dispatch({type: OrganizationOnboardingActionKind.NEXT});
    };

    const setFieldsOfInterest = (fieldsOfInterest: Array<string>) => {
        dispatch({
            type: OrganizationOnboardingActionKind.SET_FIELDS_OF_INTEREST,
            fieldsOfInterest: fieldsOfInterest,
        });
    };

    const setLocationInput = (value: SearchLocationInputType) => {
        dispatch({
            type: OrganizationOnboardingActionKind.SET_LOCATION_INPUT,
            locationInput: value,
        });
    };

    const setAvailabilities = (value: AvailabilityType) => {
        dispatch({
            type: OrganizationOnboardingActionKind.SET_AVAILABILITIES,
            availabilities: value,
        });
    };

    const displayStep = () => {
        switch (state.currentStep) {
            case 1:
                return <OrganizationOnboardingStep1/>;
            case 2:
                return (
                    <OrganizationOnboardingStep2
                        availableFields={fieldsOfInterest}
                        selectedFields={state.fieldsOfInterest}
                        onChanged={setFieldsOfInterest}
                    />
                );
            case 3:
                return (
                    <OrganizationOnboardingStep3
                        value={state.locationInput}
                        onChanged={setLocationInput}
                    />
                );
            case 4:
                return (
                    <OrganizationOnboardingStep4
                        selectedAvailabilities={state.availabilities}
                        onChanged={setAvailabilities}
                    />);
            case 5:
                return <OrganizationOnboardingStep5/>;
            default:
                break;
        }
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const currentState: OrganizationOnboardingType = state;

        // No fields of interest were provided, output an error
        if (currentState.fieldsOfInterest.length === 0) {
            setToastErrorMessage(
                toastGenericTranslations.titleStandardInformalError,
                onboardingOrganizationOnSubmitFieldsOfInterestError
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
                onboardingOrganizationOnSubmitLocationError
            );
            return;
        }

        // No fields of interest were provided, output an error
        if (Object.keys(state.availabilities).length === 0) {
            setToastErrorMessage(
                toastGenericTranslations.titleStandardInformalError,
                onboardingOrganizationOnSubmitAvailabilitiesError
            );
            return;
        }

        // Fallback error for whatever reason
        if (currentState.currentStep !== currentState.lastValidStep) {
            setToastErrorMessage(
                toastGenericTranslations.titleStandardInformalError,
                onboardingOrganizationOnSubmitOtherError
            );
            return;
        }

        onboardOrganization(
            currentState.fieldsOfInterest,
            currentState.locationInput,
            currentState.availabilities
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
