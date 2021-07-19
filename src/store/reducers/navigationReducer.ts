import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/miscUtils";
import { NavigationFilters } from "../types/navigationFilters";

export interface NavigationState {
    filters: NavigationFilters;
    backLocation: string;
    isMenuOpen: boolean;
}

type NavigationAction = {
    type: string;
    backLocation?: string;
    filters?: NavigationFilters;
    isMenuOpen?: boolean;
};

const initState: NavigationState = {
    filters: {},
    backLocation: "/",
    isMenuOpen: false,
};

const setBackLocation = (state: NavigationState, action: NavigationAction) => {
    const updatedState = {
        backLocation: action.backLocation,
    };

    return updateObject(state, updatedState);
};

const setIsMenuOpen = (state: NavigationState, action: NavigationAction) => {
    const updatedState = {
        isMenuOpen: action.isMenuOpen,
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
        case actionTypes.SET_IS_MENU_OPEN:
            return setIsMenuOpen(state, action);
        case actionTypes.SET_SEARCH_PARAMS:
            return setSearchParams(state, action);
        default:
            return state;
    }
};

export default navigationReducer;
