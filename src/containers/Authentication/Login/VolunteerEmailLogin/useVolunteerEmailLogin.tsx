import { useState, useRef } from "react";

import { useHistory } from "react-router-dom";

import { useAuth } from "../../../../contexts/AuthContext";

import useToast from "../../../../components/UI/Toast/useToast";

/**
 * Business logic for the VolunteerSignUp component
 */
export default function useVolunteerEmailLogin() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const { loginWithEmailAndPassword } = useAuth();
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const {
        setToastErrorMessage,
        toastGenericTranslations,
        toastAuthTranslations,
    } = useToast();

    /**
     * Function to be triggered when user clicks the login button. First performs a validation check, then
     * triggers the user login process. If everything goes well, redirects the user to the home page
     */
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!loginWithEmailAndPassword) return;

        // TODO: Set up a proper form field verification to check nothing is wrong
        if (
            emailRef?.current?.checkValidity() &&
            passwordRef?.current?.checkValidity()
        ) {
            try {
                setLoading(true);

                loginWithEmailAndPassword(
                    emailRef.current.value,
                    passwordRef.current.value
                )
                    .then(() => {
                        history.push("/");
                    })
                    .catch((error: any) => {
                        // TODO: Translation based on error
                        setToastErrorMessage(
                            toastGenericTranslations.titleStandardInformalError,
                            error.message
                        );
                    });
            } catch (error) {
                setToastErrorMessage(
                    toastGenericTranslations.titleStandardInformalError,
                    toastAuthTranslations.descGenericLoginError
                );
            }

            setLoading(false);
        } else {
            setToastErrorMessage(
                toastGenericTranslations.titleMissingDataError,
                toastGenericTranslations.descGenericMissingDataError
            );
        }
    };

    return {
        emailRef,
        passwordRef,
        loading,
        handleSubmit,
    };
}
