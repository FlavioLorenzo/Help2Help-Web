import * as actionTypes from "./actionTypes";

import { NavigationFilters } from "../types/navigationFilters";

export const setBackLocation = (backLocation: string) => {
    return {
        type: actionTypes.SET_BACK_LOCATION,
        backLocation: backLocation,
    };
};

export const setSearchParams = (filters: NavigationFilters) => {
    return {
        type: actionTypes.SET_SEARCH_PARAMS,
        filters: filters,
    };
};
