import { Link } from "react-router-dom";

import Button from "../../../../components/UI/Button/Button";

import useVolunteerPasswordRecovery from "./useVolunteerPasswordRecovery";

import * as translations from "../../../../translations";
import * as authTranslations from "../../Authentication.translations";
import styles from "../../Authentication.module.scss";
import FormField from "../../../../components/UI/FormField/FormField";

export const VolunteerPasswordRecovery = () => {
    const {
        loading,
        onSubmit,
        handleSubmit,
        register,
        errors,
    } = useVolunteerPasswordRecovery();

    return (
        <>
            <div className={styles.TitleGroup}>
                <h1 className={styles.Title}>
                    {authTranslations.recoveryAsVolunteerTitle}
                </h1>
                <div className={styles.LinkSubtitle}>
                    <Link to="/login/volunteer/email">
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

                    <div className={styles.ButtonGroup}>
                        <Button submit colorStyle="White" disabled={loading}>
                            {authTranslations.recoverySendLinkButton}
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};
