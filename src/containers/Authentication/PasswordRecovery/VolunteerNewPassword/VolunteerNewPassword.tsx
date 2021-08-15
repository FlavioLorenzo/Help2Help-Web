import Button from "../../../../components/UI/Button/Button";

import useVolunteerNewPassword from "./useVolunteerNewPassword";

import FormField from "../../../../components/UI/FormField/FormField";

import * as translations from "../../../../translations";
import * as authTranslations from "../../Authentication.translations";
import styles from "../../Authentication.module.scss";

//TODO: Delete?
interface VolunteerNewPasswordProps {
    onSubmit(e: any): void;
}

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
            <div className={styles.AuthSection}>
                <div className={styles.TitleGroup}>
                    <h1 className={styles.Title}>
                        {authTranslations.recoveryAsVolunteerTitle}
                    </h1>
                </div>

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
                        <Button colorStyle="White" disabled={loading}>
                            {authTranslations.createNewPasswordButton}
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};
