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

        if (!resetPassword) return;

        // TODO: Set up a proper form field verification to check nothing is wrong
        if (emailRef?.current?.checkValidity()) {
            try {
                setLoading(true);

                resetPassword(emailRef.current.value)
                    .then(() => {
                        setToastSuccessMessage(
                            toastGenericTranslations.titleStandardInformalSuccess,
                            toastAuthTranslations.descPasswordRecoverySuccess
                        );

                        setLoading(false);
                    })
                    .catch((error: any) => {
                        // TODO: Add error-based translations
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

    return { emailRef, loading, handleSubmit };
}
