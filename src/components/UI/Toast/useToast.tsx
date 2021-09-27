import { useCallback } from "react";

import { useDispatch } from "react-redux";
import * as actions from "../../../redux/actions/index";

import * as toastTranslations from "./Translations/Toast.translations";

/**
 * Business logic for the Toast component
 */
export default function useVolunteerSignUp() {
    const dispatch = useDispatch();
    const setToastErrorMessage = useCallback(
        (title, description) =>
            dispatch(actions.setToastErrorMessage(title, description)),
        [dispatch]
    );
    const setToastSuccessMessage = useCallback(
        (title, description) =>
            dispatch(actions.setToastSuccessMessage(title, description)),
        [dispatch]
    );
    const setToastWarningMessage = useCallback(
        (title, description) =>
            dispatch(actions.setToastWarningMessage(title, description)),
        [dispatch]
    );
    const setToastInfoMessage = useCallback(
        (title, description) =>
            dispatch(actions.setToastInfoMessage(title, description)),
        [dispatch]
    );

    const toastGenericTranslations = toastTranslations.toastGenericTranslations;
    const toastAuthTranslations = toastTranslations.toastAuthTranslations;

    return {
        setToastErrorMessage,
        setToastSuccessMessage,
        setToastWarningMessage,
        setToastInfoMessage,
        toastGenericTranslations,
        toastAuthTranslations,
    };
}
