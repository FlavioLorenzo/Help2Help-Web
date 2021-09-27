import { useState } from "react";

import { useHistory } from "react-router-dom";

import { useForm } from "react-hook-form";

import { useAuth } from "../../../../services/auth/AuthContext";

import useToast from "../../../../components/ui/Toast/useToast";
import schema from "./VolunteerEmailLogin.form";

interface IFormInputs {
    email: string;
    password: string;
}

/**
 * Business logic for the VolunteerEmailLogin component
 */
export default function useVolunteerEmailLogin() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInputs>({
        resolver: schema,
    });

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
    const onSubmit = (data: IFormInputs) => {
        if (!loginWithEmailAndPassword) return;

        try {
            setLoading(true);

            loginWithEmailAndPassword(data.email, data.password)
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
    };

    return {
        loading,
        onSubmit,
        handleSubmit,
        register,
        errors,
    };
}
