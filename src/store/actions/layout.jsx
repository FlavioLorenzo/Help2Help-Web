import * as actionTypes from "./actionTypes";

export const setLayoutBackRequired = (isBackRequired) => {
    return {
        type: actionTypes.SET_LAYOUT_BACK_REQUIRED,
        isBackRequired: isBackRequired,
    };
};

export const setLayoutSearchBarRequired = (isSearchBarRequired) => {
    return {
        type: actionTypes.SET_LAYOUT_BACK_REQUIRED,
        isSearchBarRequired: isSearchBarRequired,
    };
};
