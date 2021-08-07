import { useEffect } from "react";

import { useHistory } from "react-router-dom";

import { useAuth } from "../../../../contexts/AuthContext";

import useToast from "../../../../components/UI/Toast/useToast";
import { getURLSearchParamsFromURL } from "../../../../shared/miscUtils";

/**
 * Email Action Handler for Firebase email functions (email verification, password recovery, email recovery )
 * Documentation available at: https://firebase.google.com/docs/auth/custom-email-handler
 */
export const VolunteerEmailAction = () => {
    const { handleEmailVerification, validateResetPassword } = useAuth();
    const history = useHistory();

    const { setToastErrorMessage, setToastSuccessMessage } = useToast();

    useEffect(() => {
        if (!handleEmailVerification || !validateResetPassword) {
            return;
        }

        // Function that prints an error and redirects the user upon verifying that the link was malformed
        const showError = () => {
            setToastErrorMessage(
                "Errore",
                "Il link risulta errato, prova a ricontrollare la tua mail."
            );

            history.push("/login/volunteer/email");
        };

        const params: any = getURLSearchParamsFromURL(window.location.href);

        // Check that the query parameters are correctly available inside the URL
        // TODO: Substitute with translation
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
                        setToastErrorMessage("Errore", error.message);
                        history.push("/login/volunteer/email");
                    });
                break;
            case "recoverEmail":
                break;
            case "verifyEmail":
                handleEmailVerification(params["oobCode"])
                    .then(() => {
                        // TODO: Define correct message and add translation
                        setToastSuccessMessage(
                            "Sei dei nostri!",
                            "La tua mail è stata verificata. Benvenuto in Help2Help!"
                        );
                    })
                    .catch((error) => {
                        // TODO: Check possible error messages and print translation
                        setToastErrorMessage("Errore", error.message);
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
    ]);
    return <></>;
};
