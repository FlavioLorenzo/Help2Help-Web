import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/miscUtils";
import { NavigationFilters } from "../types/navigationFilters";

export interface NavigationState {
    filters: NavigationFilters;
    backLocation: string;
}

type NavigationAction = {
    type: string;
    backLocation?: string;
    filters?: NavigationFilters;
};

const initState: NavigationState = {
    filters: {},
    backLocation: "/",
};

const setBackLocation = (state: NavigationState, action: NavigationAction) => {
    const updatedState = {
        backLocation: action.backLocation,
    };

    return updateObject(state, updatedState);
};

const setSearchParams = (state: NavigationState, action: NavigationAction) => {
    const updatedFilters = {
        ...action.filters,
    };

    const updatedState = {
        filters: updateObject(state.filters, updatedFilters),
    };

    return updateObject(state, updatedState);
};

const navigationReducer = (state = initState, action: NavigationAction) => {
    switch (action.type) {
        case actionTypes.SET_BACK_LOCATION:
            return setBackLocation(state, action);
        case actionTypes.SET_SEARCH_PARAMS:
            return setSearchParams(state, action);
        default:
            return state;
    }
};

export default navigationReducer;
