import { useState } from "react";

import { useHistory } from "react-router-dom";

import { useAuth } from "../../../../services/auth/AuthContext";

import useToast from "../../../../components/ui/Toast/useToast";

/**
 * Business logic for the VolunteerSignUp component
 */
export default function useVolunteerStandardLogin() {
    const { loginWithFacebook, loginWithGoogle } = useAuth();
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const {
        setToastErrorMessage,
        toastGenericTranslations,
        toastAuthTranslations,
    } = useToast();

    /**
     * When user clicks the FB Login button, trigger the login with Facebook and handle messages accordingly
     */
    const onFacebookLoginClicked = (e: any) => {
        e.preventDefault();

        if (!loginWithFacebook) return;

        try {
            setLoading(true);

            loginWithFacebook()
                .then(() => {
                    history.push("/");
                })
                .catch((error: any) => {
                    // TODO: Add error based translation
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

    /**
     * When user clicks the Google Login button, trigger the login with Google and handle messages accordingly
     */
    const onGoogleLoginClicked = (e: any) => {
        e.preventDefault();

        if (!loginWithGoogle) return;

        try {
            setLoading(true);

            loginWithGoogle()
                .then(() => {
                    history.push("/");
                })
                .catch((error: any) => {
                    console.log(error);
                    // TODO: Add error based translation
                    setToastErrorMessage("Ooops", error);
                });
        } catch (error) {
            console.log(error);
            setToastErrorMessage(
                toastGenericTranslations.titleStandardInformalError,
                toastAuthTranslations
            );
        }

        setLoading(false);
    };

    /**
     * Act upon detecting the click of the link on the "Login with email button"
     */
    const onEmailPageButtonClicked = (e: any) => {
        e.preventDefault();

        history.push({
            pathname: "/login/volunteer/email",
        });
    };

    return {
        loading,
        onFacebookLoginClicked,
        onGoogleLoginClicked,
        onEmailPageButtonClicked,
    };
}
