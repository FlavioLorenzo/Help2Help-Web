import { Link } from "react-router-dom";

import Button from "../../../../components/UI/Button/Button";
import FormField from "../../../../components/UI/FormField/FormField";

import useVolunteerSignUp from "./useVolunteerSignUp";

import * as translations from "../../../../translations";
import * as authTranslations from "../../Authentication.translations";
import * as localTranslations from "./VolunteerSignUp.translations";

import styles from "../../Authentication.module.scss";

export const VolunteerSignUp = () => {
    const {
        loading,
        onSubmit,
        handleSubmit,
        register,
        errors,
    } = useVolunteerSignUp();

    return (
        <>
            <div className={styles.TitleGroup}>
                <h1 className={styles.Title}>
                    {localTranslations.signupAsVolunteerTitle}
                </h1>
            </div>

            <div className={styles.AuthSection}>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={styles.AuthForm}
                >
                    <FormField
                        label={translations.firstName}
                        type="text"
                        registerLabel="firstName"
                        autoComplete="given-name"
                        maxLength={255}
                        error={
                            errors.firstName &&
                            authTranslations.formErrorFirstNameRequired
                        }
                        register={register}
                    />

                    <FormField
                        label={translations.surname}
                        type="text"
                        registerLabel="lastName"
                        autoComplete="family-name"
                        maxLength={255}
                        error={
                            errors.lastName &&
                            authTranslations.formErrorLastNameRequired
                        }
                        register={register}
                    />

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

                    <FormField
                        label={authTranslations.authConfirmPassword}
                        type="password"
                        registerLabel="passwordConfirmation"
                        autoComplete="new-password"
                        maxLength={32}
                        error={
                            errors.passwordConfirmation &&
                            authTranslations.formErrorPasswordMustMatch
                        }
                        register={register}
                    />

                    <div className={styles.ButtonGroup}>
                        <Button submit colorStyle="White" disabled={loading}>
                            {localTranslations.signupAsVolunteerButton}
                        </Button>
                    </div>
                </form>
            </div>

            <div className={styles.AuthSection}>
                <div className={styles.LinkText}>
                    <Link to="/login">
                        {localTranslations.signupAsVolunteerAlreadySubscribed}
                    </Link>
                </div>
            </div>
        </>
    );
};
