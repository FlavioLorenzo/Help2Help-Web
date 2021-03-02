import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/miscUtils";

const initState = {
    isBackRequired: false,
    backLocation: "/",
    isSearchBarRequired: false,
};

const setBackRequired = (state, action) => {
    const updatedState = {
        isBackRequired: action.isBackRequired,
        backLocation: action.backLocation,
    };

    return updateObject(state, updatedState);
};

const setSearchBarRequired = (state, action) => {
    const updatedState = {
        isSearchBarRequired: action.isSearchBarRequired,
    };

    return updateObject(state, updatedState);
};

const layoutReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SET_LAYOUT_BACK_REQUIRED:
            return setBackRequired(state, action);

        case actionTypes.SET_LAYOUT_SEARCH_BAR_REQUIRED:
            return setSearchBarRequired(state, action);

        default:
            return state;
    }
};

export default layoutReducer;
