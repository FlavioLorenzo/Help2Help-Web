import { useEffect } from "react";

import { useHistory } from "react-router-dom";

import { useAuth } from "../../../../services/auth/AuthContext";

import useToast from "../../../../components/ui/Toast/useToast";
import { getURLSearchParamsFromURL } from "../../../../shared/miscUtils";

/**
 * Email Action Handler for Firebase email functions (email verification, password recovery, email recovery )
 * Documentation available at: https://firebase.google.com/docs/auth/custom-email-handler
 */
export const VolunteerEmailAction = () => {
    const { handleEmailVerification, validateResetPassword } = useAuth();
    const history = useHistory();

    const {
        setToastErrorMessage,
        setToastSuccessMessage,
        toastGenericTranslations,
        toastAuthTranslations,
    } = useToast();

    useEffect(() => {
        if (!handleEmailVerification || !validateResetPassword) {
            return;
        }

        // Function that prints an error and redirects the user upon verifying that the link was malformed
        const showError = () => {
            setToastErrorMessage(
                toastGenericTranslations.titleStandardFormalError,
                toastAuthTranslations.descWrongLinkError
            );

            history.push("/login/volunteer/email");
        };

        const params: any = getURLSearchParamsFromURL(window.location.href);

        // Check that the query parameters are correctly available inside the URL
        if (!params["mode"] || !params["oobCode"]) showError();

        switch (params["mode"]) {
            case "resetPassword":
                validateResetPassword(params["oobCode"])
                    .then(() => {
                        history.push({
                            pathname:
                                "/password-recovery/volunteer/new-password",
                            search: "?oobCode=" + params["oobCode"],
                        });
                    })
                    .catch((error) => {
                        // TODO: Check possible error messages and print translation
                        setToastErrorMessage(
                            toastGenericTranslations.titleStandardFormalError,
                            error.message
                        );
                        history.push("/login/volunteer/email");
                    });
                break;
            case "recoverEmail":
                break;
            case "verifyEmail":
                handleEmailVerification(params["oobCode"])
                    .then(() => {
                        setToastSuccessMessage(
                            toastAuthTranslations.titleEmailVerificationSuccess,
                            toastAuthTranslations.descEmailVerificationSuccess
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
                        history.push("/login/volunteer/email");
                    });
                break;
            default:
                // Invalid mode, trigger error
                showError();
        }
    }, [
        handleEmailVerification,
        validateResetPassword,
        history,
        setToastSuccessMessage,
        setToastErrorMessage,
        toastGenericTranslations,
        toastAuthTranslations,
    ]);
    return <></>;
};
