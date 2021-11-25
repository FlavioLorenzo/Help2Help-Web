import {updateObject} from "../../../shared/miscUtils";

import {SearchLocationInputType} from "../../../components/ui/SearchLocationInput/SearchLocationInput.types";
import {AvailabilityType} from "../../../types/AvailabilityType";

export enum VolunteerOnboardingActionKind {
    NEXT = "NEXT",
    PREVIOUS = "PREVIOUS",
    SET_FIELDS_OF_INTEREST = "SET_FIELDS_OF_INTEREST",
    SET_LOCATION_INPUT = "SET_LOCATION_INPUT",
    SET_AVAILABILITIES = "SET_AVAILABILITIES"
}

interface VolunteerOnboardingAction {
    type: VolunteerOnboardingActionKind;
    fieldsOfInterest?: Array<string>;
    locationInput?: SearchLocationInputType;
    availabilities?: AvailabilityType;
}

export interface VolunteerOnboardingType {
    currentStep: number;
    fieldsOfInterest: Array<string>;
    lastValidStep: number;
    locationInput: SearchLocationInputType | null;
    availabilities: AvailabilityType;
}

export const initialState: VolunteerOnboardingType = {
    currentStep: 1,
    fieldsOfInterest: [],
    lastValidStep: 1,
    locationInput: null,
    availabilities: {}
};

export const reducer = (
    state: VolunteerOnboardingType,
    action: VolunteerOnboardingAction
) => {
    switch (action.type) {
        case VolunteerOnboardingActionKind.NEXT:
            return updateObject(state, {currentStep: state.currentStep + 1});
        case VolunteerOnboardingActionKind.PREVIOUS:
            return updateObject(state, {currentStep: state.currentStep - 1});
        case VolunteerOnboardingActionKind.SET_FIELDS_OF_INTEREST:
            if (!action.fieldsOfInterest) return state;
            return updateObject(state, {
                fieldsOfInterest: [...action.fieldsOfInterest],
                lastValidStep:
                    action.fieldsOfInterest.length > 0
                        ? Object.keys(state.availabilities).length > 0
                            ? 5
                            : state.locationInput
                                ? 3
                                : 2
                        : 0,
            });
        case VolunteerOnboardingActionKind.SET_LOCATION_INPUT:
            if (!action.locationInput) return state;
            return updateObject(state, {
                locationInput: action.locationInput,
                lastValidStep: action.locationInput
                    ? Object.keys(state.availabilities).length > 0
                        ? 5
                        : 3
                    : 2,
            });
        case VolunteerOnboardingActionKind.SET_AVAILABILITIES:
            if (!action.availabilities) return state;
            return updateObject(state, {
                availabilities: {...action.availabilities},
                lastValidStep: Object.keys(state.availabilities).length > 0
                    ? 5 : 3,
            });
    }
};
