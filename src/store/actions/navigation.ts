import * as actionTypes from "./actionTypes";

import { NavigationFilters } from "../types/navigationFilters";

export const setSearchParams = (filters: NavigationFilters) => {
    return {
        type: actionTypes.SET_SEARCH_PARAMS,
        filters: filters,
    };
};
