import { useEffect, useState } from "react";
import { useAuth } from "../../../../services/auth/AuthContext";
import useToast from "../../../../components/ui/Toast/useToast";

import { getURLSearchParamsFromURL } from "../../../../shared/miscUtils";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import schema from "./OrganizationNewPassword.form";

interface IFormInputs {
    password: string;
    passwordConfirmation: string;
}

/**
 * Business logic for the OrganizationNewPasswordComponent
 */
export default function useOrganizationNewPassword() {
    const [params] = useState<any>(
        getURLSearchParamsFromURL(window.location.href)
    );

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInputs>({
        resolver: schema,
    });

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
    const onSubmit = (data: IFormInputs) => {
        if (!confirmResetPassword) return;

        try {
            setLoading(true);

            confirmResetPassword(params["oobCode"], data.password)
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

    // Check that the query parameters are correctly available inside the URL
    useEffect(() => {
        if (!params["oobCode"]) {
            setToastErrorMessage(
                toastGenericTranslations.titleStandardFormalError,
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

    return { loading, handleSubmit, onSubmit, register, errors };
}
