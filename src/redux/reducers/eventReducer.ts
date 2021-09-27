import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/miscUtils";
import { EventType } from "../../types/ReduxTypes";

export interface EventState {
    eventList: EventType[];
}

export type EventAction = {
    type: string;
    eventList: EventType[];
};

const initState: EventState = {
    eventList: [],
};

const setEventList = (state: EventState, action: EventAction) => {
    const updatedState = {
        eventList: action.eventList,
    };

    return updateObject(state, updatedState);
};

const eventReducer = (state: EventState = initState, action: EventAction) => {
    switch (action.type) {
        case actionTypes.SET_EVENT_LIST:
            return setEventList(state, action);
        default:
            return state;
    }
};

export default eventReducer;
