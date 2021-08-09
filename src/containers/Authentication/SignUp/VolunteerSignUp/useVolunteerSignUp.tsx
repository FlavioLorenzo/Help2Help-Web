import { useState } from "react";

import { useHistory } from "react-router-dom";

import { useForm } from "react-hook-form";

import { useAuth } from "../../../../contexts/AuthContext";

import useToast from "../../../../components/UI/Toast/useToast";
import schema from "./VolunteerSignUp.form";

interface IFormInputs {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordConfirmation: string;
}

/**
 * Business logic for the VolunteerSignUp component
 */
export default function useVolunteerSignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInputs>({
        resolver: schema,
    });

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

    const onSubmit = (data: IFormInputs) => {
        if (!signup) return;

        // TODO: Set up a proper form field verification to check nothing is wrong
        // errors.password?.message
        if (Object.keys(errors).length) {
            setToastErrorMessage(
                toastGenericTranslations.titleMissingDataError,
                toastGenericTranslations.descGenericMissingDataError
            );

            return;
        }

        try {
            setError("");
            setLoading(true);

            signup(data.email, data.password)
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
    };

    /**
     * Function to be triggered when user clicks the signin button. First performs a validation check, then
     * triggers the user signup process
    const onSubmit = async (e: any) => {
        e.preventDefault();

        if (!signup) return;

        // TODO: Set up a proper form field verification to check nothing is wrong
        if (
            !(
                emailRef?.current?.checkValidity() &&
                passwordRef?.current?.checkValidity() &&
                passwordConfirmationRef?.current?.checkValidity()
            )
        ) {
            setToastErrorMessage(
                toastGenericTranslations.titleMissingDataError,
                toastGenericTranslations.descGenericMissingDataError
            );

            return;
        }

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
    };
     */

    return {
        loading,
        onSubmit,
        handleSubmit,
        register,
    };
}
