import { Link } from "react-router-dom";

import useOrganizationLogin from "./useOrganizationLogin";

import Button from "../../../../components/UI/Button/Button";
import FormField from "../../../../components/UI/FormField/FormField";

import * as translations from "../../../../translations";
import * as authTranslations from "../../Authentication.translations";
import * as localTranslations from "./OrganizationLogin.translations";
import styles from "../../Authentication.module.scss";

interface OrganizationLoginProps {}

/**
 * This component is currently nearly identical to the VolunteerEmailLogin component.
 * They will be further diffferentiated in the future as they become more specialized for the two situations.
 */
export const OrganizationLogin = (props: OrganizationLoginProps) => {
    const {
        loading,
        onSubmit,
        handleSubmit,
        register,
        errors,
    } = useOrganizationLogin();

    return (
        <>
            <div className={styles.TitleGroup}>
                <h1 className={styles.Title}>
                    {authTranslations.loginAsOrganization}
                </h1>
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
                            {authTranslations.loginAsOrganization}
                        </Button>
                    </div>
                </form>
            </div>

            <div className={styles.AuthSection}>
                <div className={styles.LinkText}>
                    <Link to="/password-recovery/organization">
                        {localTranslations.loginWithEmailPasswordForgotten}
                    </Link>
                </div>

                <div className={styles.LinkText}>
                    <Link to="/signup/organization">
                        {localTranslations.loginRegisterAsOrganization}
                    </Link>
                </div>
            </div>
        </>
    );
};
