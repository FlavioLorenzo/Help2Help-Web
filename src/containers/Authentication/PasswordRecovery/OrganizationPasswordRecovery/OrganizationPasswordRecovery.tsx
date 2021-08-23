import { Link } from "react-router-dom";
import useOrganizationPasswordRecovery from "./useOrganizationPasswordRecovery";

import Button from "../../../../components/UI/Button/Button";
import FormField from "../../../../components/UI/FormField/FormField";

import * as translations from "../../../../translations";
import * as authTranslations from "../../Authentication.translations";
import styles from "../../Authentication.module.scss";

interface OrganizationPasswordRecoveryProps {}

export const OrganizationPasswordRecovery = (
    props: OrganizationPasswordRecoveryProps
) => {
    const {
        loading,
        onSubmit,
        handleSubmit,
        register,
        errors,
    } = useOrganizationPasswordRecovery();

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
