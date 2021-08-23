import { useState } from "react";

import { useHistory } from "react-router-dom";

import { useForm } from "react-hook-form";

import { useAuth } from "../../../../contexts/AuthContext";

import useToast from "../../../../components/UI/Toast/useToast";
import schema from "./OrganizationSignUp.form";

interface IFormInputs {
    organizationName: string;
    email: string;
    password: string;
    passwordConfirmation: string;
}

/**
 * Business logic for the OrganizationSignUp component
 */
export default function useOrganizationSignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInputs>({
        resolver: schema,
    });

    const { signup } = useAuth();
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

        if (Object.keys(errors).length) {
            setToastErrorMessage(
                toastGenericTranslations.titleMissingDataError,
                toastGenericTranslations.descGenericMissingDataError
            );

            return;
        }

        try {
            setLoading(true);

            signup(data.email, data.password)
                .then(() => {
                    setToastSuccessMessage(
                        toastGenericTranslations.titleStandardFormalSuccess,
                        toastAuthTranslations.descSignupSuccess
                    );

                    setLoading(false);

                    history.push("/login/organization/email");
                })
                .catch((error: any) => {
                    // TODO: Add error based translation
                    setToastErrorMessage(
                        toastGenericTranslations.titleStandardFormalError,
                        error
                    );
                });
        } catch (error) {
            setToastErrorMessage(
                toastGenericTranslations.titleStandardFormalError,
                toastAuthTranslations.descGenericSignupError
            );
        }

        setLoading(false);
    };

    return {
        loading,
        onSubmit,
        handleSubmit,
        register,
        errors,
    };
}
