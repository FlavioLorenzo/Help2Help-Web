import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/miscUtils";
import { NavigationFilters } from "../types/navigationFilters";

export interface NavigationState {
    filters: NavigationFilters;
}

type NavigationAction = {
    type: string;
    filters?: NavigationFilters;
};

const initState: NavigationState = {
    filters: {},
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
        case actionTypes.SET_SEARCH_PARAMS:
            return setSearchParams(state, action);
        default:
            return state;
    }
};

export default navigationReducer;
