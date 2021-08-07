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

    const { setToastErrorMessage, setToastSuccessMessage } = useToast();

    /**
     * Function to be triggered when user clicks the password recovery button. First performs a validation check, then
     * triggers the user password reset process
     */
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!confirmResetPassword) return;

        // TODO: Set up a proper form field verification to check nothing is wrong
        // TODO: Substitute with translation
        if (
            passwordRef?.current?.checkValidity() &&
            passwordConfirmationRef?.current?.checkValidity()
        ) {
            // TODO: add password strength check
            if (
                !(
                    passwordRef.current.value ===
                    passwordConfirmationRef.current.value
                )
            ) {
                // TODO: Add translation
                setToastErrorMessage(
                    "Errore",
                    "Le password fornite non corrispondono."
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
                            "Successo",
                            "La tua password è stata reimpostata correttamente. Prova ad accedere all'app!"
                        );

                        setLoading(false);
                        history.push("/login/volunteer/email");
                    })
                    .catch((error: any) => {
                        setToastErrorMessage("Errore", error);
                    });
            } catch (error) {
                setToastErrorMessage(
                    "Errore",
                    "Si è verificato un errore durante la procedura di ripristino password, riprovare più tardi."
                );
            }

            setLoading(false);
        }
    };

    // Check that the query parameters are correctly available inside the URL
    // TODO: Substitute with translation
    useEffect(() => {
        if (!params["oobCode"]) {
            setToastErrorMessage(
                "Errore",
                "Il link risulta errato, prova a ricontrollare la tua mail."
            );

            history.push("/login/volunteer/email");
        }
    }, [history, params, setToastErrorMessage]);

    return { passwordRef, passwordConfirmationRef, loading, handleSubmit };
}
