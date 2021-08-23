import { Link } from "react-router-dom";

import Button from "../../../../components/UI/Button/Button";

import useOrganizationSignUp from "./useOrganizationSignUp";

import * as translations from "../../../../translations";
import * as authTranslations from "../../Authentication.translations";
import * as localTranslations from "./OrganizationSignUp.translations";
import styles from "../../Authentication.module.scss";
import FormField from "../../../../components/UI/FormField/FormField";

interface OrganizationSignUpProps {}

export const OrganizationSignUp = (props: OrganizationSignUpProps) => {
    const {
        loading,
        onSubmit,
        handleSubmit,
        register,
        errors,
    } = useOrganizationSignUp();

    return (
        <>
            <div className={styles.TitleGroup}>
                <h1 className={styles.Title}>
                    {localTranslations.signupAsOrganizationTitle}
                </h1>
            </div>

            <div className={styles.AuthSection}>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={styles.AuthForm}
                >
                    <FormField
                        label={translations.organizationName}
                        type="text"
                        registerLabel="organizationName"
                        autoComplete="organization"
                        maxLength={255}
                        error={
                            errors.organizationName &&
                            authTranslations.formErrorFirstNameRequired
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
                            {localTranslations.signupAsOrganizationButton}
                        </Button>
                    </div>
                </form>
            </div>

            <div className={styles.AuthSection}>
                <div className={styles.LinkText}>
                    <Link to="/login/organization">
                        {
                            localTranslations.signupAsOrganizationAlreadySubscribed
                        }
                    </Link>
                </div>
            </div>
        </>
    );
};
