import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/miscUtils";

export interface LayoutState {
    isBackRequired: boolean;
    backLocation: string;
    isSearchBarRequired: boolean;
}

type LayoutAction = {
    type: string;
    isBackRequired?: boolean;
    backLocation?: boolean;
    isSearchBarRequired?: boolean;
};

const initState: LayoutState = {
    isBackRequired: false,
    backLocation: "/",
    isSearchBarRequired: false,
};

const setBackRequired = (state: LayoutState, action: LayoutAction) => {
    const updatedState = {
        isBackRequired: action.isBackRequired,
        backLocation: action.backLocation,
    };

    return updateObject(state, updatedState);
};

const setSearchBarRequired = (state: LayoutState, action: LayoutAction) => {
    const updatedState = {
        isSearchBarRequired: action.isSearchBarRequired,
    };

    return updateObject(state, updatedState);
};

const layoutReducer = (state = initState, action: LayoutAction) => {
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
