import * as actionTypes from "./actionTypes";

export const setToastSuccessMessage = (title: string, description: string) => {
    return {
        type: actionTypes.SET_TOAST_SUCCESS_MESSAGE,
        title: title,
        description: description,
    };
};

export const setToastInfoMessage = (title: string, description: string) => {
    return {
        type: actionTypes.SET_TOAST_INFO_MESSAGE,
        title: title,
        description: description,
    };
};

export const setToastWarningMessage = (title: string, description: string) => {
    return {
        type: actionTypes.SET_TOAST_WARNING_MESSAGE,
        title: title,
        description: description,
    };
};

export const setToastErrorMessage = (title: string, description: string) => {
    return {
        type: actionTypes.SET_TOAST_ERROR_MESSAGE,
        title: title,
        description: description,
    };
};

export const setToastEraseAllMessages = () => {
    return {
        type: actionTypes.SET_TOAST_ERASE_ALL_MESSAGES,
    };
};

export const setToastEraseMessage = (index: number) => {
    return {
        type: actionTypes.SET_TOAST_ERASE_MESSAGE,
        index: index,
    };
};
