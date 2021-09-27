import { useState } from "react";
import { useAuth } from "../../../../services/auth/AuthContext";
import { useForm } from "react-hook-form";
import useToast from "../../../../components/ui/Toast/useToast";

import schema from "./OrganizationPasswordRecovery.form";

interface IFormInputs {
    email: string;
}

/**
 * Business logic for the OrganizationPasswordRecoveryComponent
 */
export default function useOrganizationPasswordRecovery() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInputs>({
        resolver: schema,
    });

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
    const onSubmit = (data: IFormInputs) => {
        if (!resetPassword) return;

        try {
            setLoading(true);

            resetPassword(data.email)
                .then(() => {
                    setToastSuccessMessage(
                        toastGenericTranslations.titleStandardFormalSuccess,
                        toastAuthTranslations.descPasswordRecoverySuccess
                    );

                    setLoading(false);
                })
                .catch((error: any) => {
                    // TODO: Add error-based translations
                    setToastErrorMessage(
                        toastGenericTranslations.titleStandardFormalError,
                        error
                    );
                });
        } catch (error) {
            setToastErrorMessage(
                toastGenericTranslations.titleStandardFormalError,
                toastAuthTranslations.descPasswordRecoveryError
            );
        }

        setLoading(false);
    };

    return { loading, onSubmit, handleSubmit, register, errors };
}
