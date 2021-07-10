import { useState, useRef } from "react";

import { useHistory } from "react-router-dom";

import { useAuth } from "../../../../contexts/AuthContext";

import useToast from "../../../../components/UI/Toast/useToast";

/**
 * Business logic for the VolunteerSignUp component
 */
// TODO: Fix to adapt to the standard login
export default function useVolunteerStandardLogin() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const { loginWithEmailAndPassword } = useAuth();
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const { setToastErrorMessage } = useToast();

    /**
     * Function to be triggered when user clicks the login button. First performs a validation check, then
     * triggers the user login process. If everything goes well, redirects the user to the home page
     */
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!loginWithEmailAndPassword) return;

        // TODO: Set up a proper form field verification to check nothing is wrong
        // TODO: Substitute with translations
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
                        setToastErrorMessage("Ooops", error);
                    });
            } catch (error) {
                setToastErrorMessage(
                    "Errore",
                    "Si è verificato un errore durante il login. Si prega di riprovare più tardi."
                );
            }

            setLoading(false);
        } else {
            setToastErrorMessage(
                "Dati mancanti",
                "Completa tutti i campi per poter accedere"
            );
        }
    };

    // Act upon detecting the click of the search bar
    const onEmailPageButtonClicked = (e: any) => {
        e.preventDefault();

        history.push({
            pathname: "/login/volunteer/email",
        });
    };

    return {
        emailRef,
        passwordRef,
        loading,
        handleSubmit,
        onEmailPageButtonClicked,
    };
}
