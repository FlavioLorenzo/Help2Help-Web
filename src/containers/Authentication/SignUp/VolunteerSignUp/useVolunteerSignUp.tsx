import { useState, useRef, useCallback } from "react";

import { useHistory } from "react-router-dom";

import { useAuth } from "../../../../contexts/AuthContext";

import { useDispatch } from "react-redux";
import * as actions from "../../../../store/actions/index";

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

    const dispatch = useDispatch();
    const setToastErrorMessage = useCallback(
        (title, description) =>
            dispatch(actions.setToastErrorMessage(title, description)),
        [dispatch]
    );
    const setToastSuccessMessage = useCallback(
        (title, description) =>
            dispatch(actions.setToastSuccessMessage(title, description)),
        [dispatch]
    );

    /**
     * Function to be triggered when user clicks the signin button. First performs a validation check, then
     * triggers the user signup process
     */
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!signup) return;

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
                            "Successo",
                            "Iscrizione avvenuta correttamente. Dovrebbe esserti stata inviata una mail pirla."
                        );

                        history.push("/login/volunteer/email");
                    })
                    .catch((error: any) => {
                        setToastErrorMessage("Dati mancanti", error);
                    });
            } catch (error) {
                setToastErrorMessage(
                    "Errore",
                    "Si è verificato un errore durante la creazione dell'account"
                );
            }

            setLoading(false);
        } else {
            setToastErrorMessage(
                "Dati mancanti",
                "Completa tutti i campi per poterti iscrivere"
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
