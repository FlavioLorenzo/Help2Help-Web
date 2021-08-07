import { useEffect } from "react";

import { useHistory } from "react-router-dom";

import { useAuth } from "../../../contexts/AuthContext";

import useToast from "../../../components/UI/Toast/useToast";

const Logout = () => {
    const { logout } = useAuth();
    const history = useHistory();

    const {
        setToastErrorMessage,
        setToastSuccessMessage,
        toastGenericTranslations,
        toastAuthTranslations,
    } = useToast();

    useEffect(() => {
        if (!logout) {
            return;
        }

        logout()
            .then(() => {
                setToastSuccessMessage(
                    toastAuthTranslations.titleLogoutSuccess,
                    toastAuthTranslations.descLogoutSuccess
                );
            })
            .catch((error) => {
                // TODO: Check possible error messages and print translation
                setToastErrorMessage(
                    toastGenericTranslations.titleStandardFormalError,
                    error.message
                );
            })
            .finally(() => {
                history.push("/login/volunteer/");
            });
    }, [
        logout,
        history,
        setToastSuccessMessage,
        setToastErrorMessage,
        toastGenericTranslations,
        toastAuthTranslations,
    ]);
    return <></>;
};

export default Logout;
