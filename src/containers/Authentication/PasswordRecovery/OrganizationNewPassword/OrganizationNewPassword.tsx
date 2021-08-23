import { Link } from "react-router-dom";

import Button from "../../../../components/UI/Button/Button";
import FormField from "../../../../components/UI/FormField/FormField";

import useOrganizationNewPassword from "./useOrganizationNewPassword";

import * as translations from "../../../../translations";
import * as authTranslations from "../../Authentication.translations";
import styles from "../../Authentication.module.scss";

interface OrganizationNewPasswordProps {}

export const OrganizationNewPassword = (
    props: OrganizationNewPasswordProps
) => {
    const {
        loading,
        handleSubmit,
        onSubmit,
        register,
        errors,
    } = useOrganizationNewPassword();

    return (
        <>
            <div className={styles.TitleGroup}>
                <h1 className={styles.Title}>
                    {authTranslations.recoveryAsOrganizationTitle}
                </h1>
                <div className={styles.LinkSubtitle}>
                    <Link to="/login/organization">
                        {authTranslations.authGoBack}
                    </Link>
                </div>
            </div>

            <div className={styles.AuthSection}>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={styles.AuthForm}
                >
                    <FormField
                        label={translations.password}
                        type="password"
                        registerLabel="password"
                        autoComplete="new-password"
                        maxLength={32}
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
                            {authTranslations.createNewPasswordButton}
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};
