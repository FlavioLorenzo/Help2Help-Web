import * as actionTypes from "./actionTypes";

export const setLayoutBackRequired = (isBackRequired, backLocation = "/") => {
    return {
        type: actionTypes.SET_LAYOUT_BACK_REQUIRED,
        isBackRequired: isBackRequired,
        backLocation: backLocation,
    };
};

export const setLayoutSearchBarRequired = (isSearchBarRequired) => {
    return {
        type: actionTypes.SET_LAYOUT_SEARCH_BAR_REQUIRED,
        isSearchBarRequired: isSearchBarRequired,
    };
};
