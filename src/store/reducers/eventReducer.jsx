import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/miscUtils";

const initState = {
    eventList: [],
};

const setEventList = (state, action) => {
    const updatedState = {
        eventList: action.eventList,
    };

    return updateObject(state, updatedState);
};

const eventReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SET_EVENT_LIST:
            return setEventList(state, action);
        default:
            return state;
    }
};

export default eventReducer;
