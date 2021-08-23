import Button from "../../../../components/UI/Button/Button";

import useVolunteerNewPassword from "./useVolunteerNewPassword";

import FormField from "../../../../components/UI/FormField/FormField";

import * as translations from "../../../../translations";
import * as authTranslations from "../../Authentication.translations";
import styles from "../../Authentication.module.scss";

interface VolunteerNewPasswordProps {}

export const VolunteerNewPassword = (props: VolunteerNewPasswordProps) => {
    const {
        loading,
        handleSubmit,
        onSubmit,
        register,
        errors,
    } = useVolunteerNewPassword();

    return (
        <>
            <div className={styles.TitleGroup}>
                <h1 className={styles.Title}>
                    {authTranslations.recoveryAsVolunteerTitle}
                </h1>
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
