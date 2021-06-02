import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import Button from "../../../../components/UI/Button/Button";

// import useLogin from "./hooks/useLogin"
import { useAuth } from "../../../../contexts/AuthContext";

import * as translations from "../../../../translations";
import * as authTranslations from "../../Authentication.translations";
import styles from "../../Authentication.module.scss";

interface VolunteerSignUpProps {
    onSubmit(e: any): void;
}

export const VolunteerSignUp = (props: VolunteerSignUpProps) => {
    const firstNameRef = useRef<HTMLInputElement>(null);
    const surnameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmationRef = useRef<HTMLInputElement>(null);

    const { signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: any) {
        e.preventDefault();

        if (
            emailRef.current &&
            emailRef.current?.checkValidity() &&
            passwordRef.current &&
            passwordRef.current?.checkValidity()
        ) {
            try {
                setError("");
                setLoading(true);
                // signup(emailRef.current.value, passwordRef.current.value);
            } catch {
                setError(
                    "Si è verificato un errore durante la creazione dell'account"
                );
                setLoading(false);
            }
        }
    }

    return (
        <>
            <div className={styles.LoginSection}>
                <div className={styles.TitleGroup}>
                    <h1 className={styles.Title}>
                        {authTranslations.signupAsVolunteerTitle}
                    </h1>
                </div>

                {error && <div>{error}</div>}

                <form onSubmit={props.onSubmit} className={styles.LoginForm}>
                    <label>
                        <div className={styles.LoginFormLabel}>
                            {translations.firstName}
                        </div>
                        <div className={styles.LoginFormInput}>
                            <input
                                type="text"
                                autoComplete="given-name"
                                ref={firstNameRef}
                            />
                        </div>
                    </label>

                    <label>
                        <div className={styles.LoginFormLabel}>
                            {translations.surname}
                        </div>
                        <div className={styles.LoginFormInput}>
                            <input
                                type="text"
                                autoComplete="family-name"
                                ref={surnameRef}
                            />
                        </div>
                    </label>

                    <label>
                        <div className={styles.LoginFormLabel}>
                            {translations.email}
                        </div>
                        <div className={styles.LoginFormInput}>
                            <input
                                type="text"
                                autoComplete="email"
                                ref={emailRef}
                            />
                        </div>
                    </label>

                    <label>
                        <div className={styles.LoginFormLabel}>
                            {translations.password}
                        </div>
                        <div className={styles.LoginFormInput}>
                            <input
                                type="password"
                                autoComplete="new-password"
                                ref={passwordRef}
                            />
                        </div>
                    </label>

                    <label>
                        <div className={styles.LoginFormLabel}>
                            {authTranslations.authConfirmPassword}
                        </div>
                        <div className={styles.LoginFormInput}>
                            <input
                                type="password"
                                autoComplete="new-password"
                                ref={passwordConfirmationRef}
                            />
                        </div>
                    </label>

                    <div className={styles.ButtonGroup}>
                        <Button colorStyle="White" disabled={loading}>
                            {authTranslations.signupAsVolunteerButton}
                        </Button>
                    </div>
                </form>
            </div>

            <div className={styles.LoginSection}>
                <div className={styles.LinkText}>
                    <Link to="/login">
                        {authTranslations.signupAsVolunteerAlreadySubscribed}
                    </Link>
                </div>
            </div>
        </>
    );
};
