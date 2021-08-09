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
    const { loading, onSubmit, handleSubmit, register } = useVolunteerSignUp();

    return (
        <>
            <div className={styles.TitleGroup}>
                <h1 className={styles.Title}>
                    {authTranslations.signupAsVolunteerTitle}
                </h1>
            </div>

            <div className={styles.AuthSection}>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={styles.AuthForm}
                >
                    <label>
                        <div className={styles.AuthFormLabel}>
                            {translations.firstName}
                        </div>
                        <div className={styles.AuthFormInput}>
                            <input
                                {...register("firstName")}
                                type="text"
                                autoComplete="given-name"
                                required
                            />
                        </div>
                    </label>

                    <label>
                        <div className={styles.AuthFormLabel}>
                            {translations.surname}
                        </div>
                        <div className={styles.AuthFormInput}>
                            <input
                                {...register("lastName")}
                                type="text"
                                autoComplete="family-name"
                                required
                            />
                        </div>
                    </label>

                    <label>
                        <div className={styles.AuthFormLabel}>
                            {translations.email}
                        </div>
                        <div className={styles.AuthFormInput}>
                            <input
                                {...register("email")}
                                type="text"
                                autoComplete="email"
                                required
                            />
                        </div>
                    </label>

                    <label>
                        <div className={styles.AuthFormLabel}>
                            {translations.password}
                        </div>
                        <div className={styles.AuthFormInput}>
                            <input
                                {...register("password")}
                                type="password"
                                autoComplete="new-password"
                                required
                            />
                        </div>
                    </label>

                    <label>
                        <div className={styles.AuthFormLabel}>
                            {authTranslations.authConfirmPassword}
                        </div>
                        <div className={styles.AuthFormInput}>
                            <input
                                {...register("passwordConfirmation")}
                                type="password"
                                autoComplete="new-password"
                                required
                            />
                        </div>
                    </label>

                    <div className={styles.ButtonGroup}>
                        <Button submit colorStyle="White" disabled={loading}>
                            {authTranslations.signupAsVolunteerButton}
                        </Button>
                    </div>
                </form>
            </div>

            <div className={styles.AuthSection}>
                <div className={styles.LinkText}>
                    <Link to="/login">
                        {authTranslations.signupAsVolunteerAlreadySubscribed}
                    </Link>
                </div>
            </div>
        </>
    );
};
