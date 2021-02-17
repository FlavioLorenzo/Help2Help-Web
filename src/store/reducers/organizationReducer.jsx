import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/miscUtils";

const initState = {
    organizationList: [],
};

const setOrganizationList = (state, action) => {
    const updatedState = {
        organizationList: action.organizationList,
    };

    return updateObject(state, updatedState);
};

const organizationReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SET_ORGANIZATION_LIST:
            return setOrganizationList(state, action);
        default:
            return state;
    }
};

export default organizationReducer;
