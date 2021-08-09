import { useEffect, useState, useRef } from "react";
import { useAuth } from "../../../../contexts/AuthContext";
import useToast from "../../../../components/UI/Toast/useToast";

import { getURLSearchParamsFromURL } from "../../../../shared/miscUtils";
import { useHistory } from "react-router-dom";

/**
 * Business logic for the VolunteerPasswordRecoveryComponent
 */
export default function useVolunteerPasswordRecovery() {
    const [params] = useState<any>(
        getURLSearchParamsFromURL(window.location.href)
    );
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmationRef = useRef<HTMLInputElement>(null);
    const { confirmResetPassword } = useAuth();
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const {
        setToastErrorMessage,
        setToastSuccessMessage,
        toastGenericTranslations,
        toastAuthTranslations,
    } = useToast();

    /**
     * Function to be triggered when user clicks the password recovery button. First performs a validation check, then
     * triggers the user password reset process
     */
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!confirmResetPassword) return;

        // TODO: Set up a proper form field verification to check nothing is wrong
        if (
            passwordRef?.current?.checkValidity() &&
            passwordConfirmationRef?.current?.checkValidity()
        ) {
            // TODO: add password strength check
            if (
                passwordRef.current.value !==
                passwordConfirmationRef.current.value
            ) {
                setToastErrorMessage(
                    toastGenericTranslations.titleStandardInformalError,
                    toastAuthTranslations.descPasswordDoNotMatchError
                );
                return;
            }

            try {
                setLoading(true);

                confirmResetPassword(
                    params["oobCode"],
                    passwordRef.current.value
                )
                    .then(() => {
                        setToastSuccessMessage(
                            toastGenericTranslations.titleStandardFormalSuccess,
                            toastAuthTranslations.descPasswordRecoveryResetSuccess
                        );

                        setLoading(false);
                        history.push("/login/volunteer/email");
                    })
                    // TODO: Define error-based translation
                    .catch((error: any) => {
                        setToastErrorMessage(
                            toastGenericTranslations.titleStandardInformalError,
                            error
                        );
                    });
            } catch (error) {
                setToastErrorMessage(
                    toastGenericTranslations.titleStandardInformalError,
                    toastAuthTranslations.descPasswordRecoveryError
                );
            }

            setLoading(false);
        }
    };

    // Check that the query parameters are correctly available inside the URL
    useEffect(() => {
        if (!params["oobCode"]) {
            setToastErrorMessage(
                toastGenericTranslations.titleStandardInformalError,
                toastAuthTranslations.descWrongLinkError
            );

            history.push("/login/volunteer/email");
        }
    }, [
        history,
        params,
        setToastErrorMessage,
        toastGenericTranslations,
        toastAuthTranslations,
    ]);

    return { passwordRef, passwordConfirmationRef, loading, handleSubmit };
}
