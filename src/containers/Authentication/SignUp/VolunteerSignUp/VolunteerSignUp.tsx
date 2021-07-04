import { Link } from "react-router-dom";

import Button from "../../../../components/UI/Button/Button";

import useVolunteerSignUp from "./useVolunteerSignUp";

import * as translations from "../../../../translations";
import * as authTranslations from "../../Authentication.translations";
import styles from "../../Authentication.module.scss";

interface VolunteerSignUpProps {
    onSubmit(e: any): void;
}

export const VolunteerSignUp = (props: VolunteerSignUpProps) => {
    const {
        firstNameRef,
        surnameRef,
        emailRef,
        passwordRef,
        passwordConfirmationRef,
        loading,
        handleSubmit,
    } = useVolunteerSignUp();

    return (
        <>
            <div className={styles.TitleGroup}>
                <h1 className={styles.Title}>
                    {authTranslations.signupAsVolunteerTitle}
                </h1>
            </div>

            <div className={styles.LoginSection}>
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
                                required
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
                                required
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
                                required
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
                                required
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
                                required
                            />
                        </div>
                    </label>

                    <div className={styles.ButtonGroup}>
                        <Button
                            colorStyle="White"
                            disabled={loading}
                            clicked={handleSubmit}
                        >
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
