import { useState, useRef } from "react";
import { useAuth } from "../../../../contexts/AuthContext";
import useToast from "../../../../components/UI/Toast/useToast";

/**
 * Business logic for the VolunteerPasswordRecoveryComponent
 */
export default function useVolunteerPasswordRecovery() {
    const emailRef = useRef<HTMLInputElement>(null);
    const { resetPassword } = useAuth();
    const [loading, setLoading] = useState(false);

    const { setToastErrorMessage, setToastSuccessMessage } = useToast();

    /**
     * Function to be triggered when user clicks the password recovery button. First performs a validation check, then
     * triggers the user password reset process
     */
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!resetPassword) return;

        // TODO: Set up a proper form field verification to check nothing is wrong
        // TODO: Substitute with translation
        if (emailRef?.current?.checkValidity()) {
            try {
                setLoading(true);

                resetPassword(emailRef.current.value)
                    .then(() => {
                        setToastSuccessMessage(
                            "Successo",
                            "Una mail con il link per il ripristino della password è stata inviata al tuo account"
                        );

                        setLoading(false);
                    })
                    .catch((error: any) => {
                        setToastErrorMessage("Errore", error);
                    });
            } catch (error) {
                setToastErrorMessage(
                    "Errore",
                    "Si è verificato un errore durante la procedura di ripristino password"
                );
            }

            setLoading(false);
        }
    };

    return { emailRef, loading, handleSubmit };
}
