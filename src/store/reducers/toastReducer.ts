import { ToastElement } from "../../components/UI/Toast/Toast";
import { updateObject } from "../../shared/miscUtils";
import * as actionTypes from "../actions/actionTypes";

export interface ToastState {
    toastMessages: Array<ToastElement>;
}

export type ToastAction = {
    type: string;
    title?: string;
    description?: string;
    index?: number;
};

const initState = {
    toastMessages: [],
};

const setToastSuccessMessage = (state: ToastState, action: ToastAction) => {
    const title = action.title ? action.title : "Success";
    const description = action.description
        ? action.description
        : "Success default message";

    const newToastMessage: ToastElement = {
        title: title,
        description: description,
        type: "Success",
    };

    const updatedToastMessages: Array<ToastElement> = [
        ...state.toastMessages,
        newToastMessage,
    ];

    const updatedState = { toastMessages: updatedToastMessages };

    return updateObject(state, updatedState);
};

const setToastInfoMessage = (state: ToastState, action: ToastAction) => {
    const title = action.title ? action.title : "Info";
    const description = action.description
        ? action.description
        : "Info default message";

    const newToastMessage: ToastElement = {
        title: title,
        description: description,
        type: "Info",
    };

    const updatedToastMessages: Array<ToastElement> = [
        ...state.toastMessages,
        newToastMessage,
    ];

    const updatedState = { toastMessages: updatedToastMessages };

    return updateObject(state, updatedState);
};

const setToastWarningMessage = (state: ToastState, action: ToastAction) => {
    const title = action.title ? action.title : "Warning";
    const description = action.description
        ? action.description
        : "Warning default message";

    const newToastMessage: ToastElement = {
        title: title,
        description: description,
        type: "Warning",
    };

    const updatedToastMessages: Array<ToastElement> = [
        ...state.toastMessages,
        newToastMessage,
    ];

    const updatedState = { toastMessages: updatedToastMessages };

    return updateObject(state, updatedState);
};

const setToastErrorMessage = (state: ToastState, action: ToastAction) => {
    const title = action.title ? action.title : "Error";
    const description = action.description
        ? action.description
        : "Error default message";

    const newToastMessage: ToastElement = {
        title: title,
        description: description,
        type: "Error",
    };

    const updatedToastMessages: Array<ToastElement> = [
        ...state.toastMessages,
        newToastMessage,
    ];

    const updatedState = { toastMessages: updatedToastMessages };

    return updateObject(state, updatedState);
};

/**
 * Deletes the toast at position *index*
 * @param state The current Redux Toast state
 * @param action The action provided by the user
 * @returns The updated Toast state with the selected item removed
 */
const setToastEraseMessage = (state: ToastState, action: ToastAction) => {
    if (typeof action.index != "number") {
        return state;
    }

    let updatedToastMessages = [...state.toastMessages];
    updatedToastMessages.splice(action.index, 1);

    const updatedState = { toastMessages: updatedToastMessages };
    return updateObject(state, updatedState);
};

/**
 * Deletes all toast messages
 * @param state The current Redux Toast state
 * @param action The action provided by the user
 * @returns The updated Toast state with all items removed
 */
const setToastEraseAllMessages = (state: ToastState, action: ToastAction) => {
    const updatedState = { toastMessages: [] };
    return updateObject(state, updatedState);
};

const toastReducer = (state: ToastState = initState, action: ToastAction) => {
    switch (action.type) {
        case actionTypes.SET_TOAST_SUCCESS_MESSAGE:
            return setToastSuccessMessage(state, action);
        case actionTypes.SET_TOAST_INFO_MESSAGE:
            return setToastInfoMessage(state, action);
        case actionTypes.SET_TOAST_WARNING_MESSAGE:
            return setToastWarningMessage(state, action);
        case actionTypes.SET_TOAST_ERROR_MESSAGE:
            return setToastErrorMessage(state, action);
        case actionTypes.SET_TOAST_ERASE_MESSAGE:
            return setToastEraseMessage(state, action);
        case actionTypes.SET_TOAST_ERASE_ALL_MESSAGES:
            return setToastEraseAllMessages(state, action);
        default:
            return state;
    }
};

export default toastReducer;
