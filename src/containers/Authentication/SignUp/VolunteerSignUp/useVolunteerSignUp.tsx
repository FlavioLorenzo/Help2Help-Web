import { useState, useRef } from "react";

import { useHistory } from "react-router-dom";

import { useAuth } from "../../../../contexts/AuthContext";

import useToast from "../../../../components/UI/Toast/useToast";

/**
 * Business logic for the VolunteerSignUp component
 */
export default function useVolunteerSignUp() {
    const firstNameRef = useRef<HTMLInputElement>(null);
    const surnameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmationRef = useRef<HTMLInputElement>(null);
    // eslint-disable-next-line
    const { signup } = useAuth();
    // eslint-disable-next-line
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const {
        setToastErrorMessage,
        setToastSuccessMessage,
        toastGenericTranslations,
        toastAuthTranslations,
    } = useToast();

    /**
     * Function to be triggered when user clicks the signin button. First performs a validation check, then
     * triggers the user signup process
     */
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!signup) return;

        // TODO: Set up a proper form field verification to check nothing is wrong
        if (
            emailRef?.current?.checkValidity() &&
            passwordRef?.current?.checkValidity() &&
            passwordConfirmationRef?.current?.checkValidity()
        ) {
            try {
                setError("");
                setLoading(true);

                signup(emailRef.current.value, passwordRef.current.value)
                    .then(() => {
                        setToastSuccessMessage(
                            toastGenericTranslations.titleStandardInformalSuccess,
                            toastAuthTranslations.descSignupSuccess
                        );

                        setLoading(false);

                        history.push("/login/volunteer/email");
                    })
                    .catch((error: any) => {
                        // TODO: Add error based translation
                        setToastErrorMessage(
                            toastGenericTranslations.titleStandardInformalError,
                            error
                        );
                    });
            } catch (error) {
                setToastErrorMessage(
                    toastGenericTranslations.titleStandardInformalError,
                    toastAuthTranslations.descGenericSignupError
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
        firstNameRef,
        surnameRef,
        emailRef,
        passwordRef,
        passwordConfirmationRef,
        loading,
        handleSubmit,
    };
}
