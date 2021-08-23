import { Link } from "react-router-dom";

import Button from "../../../../components/UI/Button/Button";
import FormField from "../../../../components/UI/FormField/FormField";

import * as translations from "../../../../translations";
import * as authTranslations from "../../Authentication.translations";
import * as localTranslations from "./VolunteerEmailLogin.translations";
import styles from "../../Authentication.module.scss";
import useVolunteerEmailLogin from "./useVolunteerEmailLogin";

interface VolunteerEmailLoginProps {}

export const VolunteerEmailLogin = (props: VolunteerEmailLoginProps) => {
    const {
        loading,
        onSubmit,
        handleSubmit,
        register,
        errors,
    } = useVolunteerEmailLogin();

    return (
        <>
            <div className={styles.TitleGroup}>
                <h1 className={styles.Title}>
                    {localTranslations.loginAccessWithEmail}
                </h1>
                <div className={styles.LinkSubtitle}>
                    <Link to="/login">{authTranslations.authGoBack}</Link>
                </div>
            </div>

            <div className={styles.AuthSection}>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={styles.AuthForm}
                >
                    <FormField
                        label={translations.email}
                        type="email"
                        registerLabel="email"
                        autoComplete="email"
                        maxLength={255}
                        error={
                            errors.email &&
                            authTranslations.formErrorEmailRequired
                        }
                        register={register}
                    />

                    <FormField
                        label={translations.password}
                        type="password"
                        registerLabel="password"
                        autoComplete="new-password"
                        maxLength={255}
                        error={
                            errors.password &&
                            authTranslations.formErrorPasswordRequired
                        }
                        register={register}
                    />

                    <div className={styles.ButtonGroup}>
                        <Button colorStyle="White" disabled={loading} submit>
                            {authTranslations.loginStandardMessage}
                        </Button>
                    </div>
                </form>
            </div>

            <div className={styles.AuthSection}>
                <div className={styles.LinkText}>
                    <Link to="/password-recovery">
                        {localTranslations.loginWithEmailPasswordForgotten}
                    </Link>
                </div>

                <div className={styles.LinkText}>
                    <Link to="/signup">
                        {localTranslations.loginRegisterWithEmail}
                    </Link>
                </div>
            </div>
        </>
    );
};
