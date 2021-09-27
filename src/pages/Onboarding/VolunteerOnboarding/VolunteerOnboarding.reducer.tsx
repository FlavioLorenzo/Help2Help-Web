import { updateObject } from "../../../shared/miscUtils";

import { SearchLocationInputType } from "../../../components/ui/SearchLocationInput/SearchLocationInput.types";

export enum VolunteerOnboardingActionKind {
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

export interface VolunteerOnboardingType {
    currentStep: number;
    fieldsOfInterest: Array<string>;
    lastValidStep: number;
    locationInput: SearchLocationInputType | null;
}

export const initialState: VolunteerOnboardingType = {
    currentStep: 1,
    fieldsOfInterest: [],
    lastValidStep: 1,
    locationInput: null,
};

export const reducer = (
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
