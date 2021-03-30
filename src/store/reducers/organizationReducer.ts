import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/miscUtils";
import { OrganizationType } from "../../types/ReduxTypes";

export interface OrganizationState {
    organizationList: OrganizationType[];
}

export type OrganizationAction = {
    type: string;
    organizationList: OrganizationType[];
};

const initState = {
    organizationList: [],
};

const setOrganizationList = (
    state: OrganizationState,
    action: OrganizationAction
) => {
    const updatedState = {
        organizationList: action.organizationList,
    };

    return updateObject(state, updatedState);
};

const organizationReducer = (
    state: OrganizationState = initState,
    action: OrganizationAction
) => {
    switch (action.type) {
        case actionTypes.SET_ORGANIZATION_LIST:
            return setOrganizationList(state, action);
        default:
            return state;
    }
};

export default organizationReducer;
