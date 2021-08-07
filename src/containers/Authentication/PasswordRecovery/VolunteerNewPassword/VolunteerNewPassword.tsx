import Button from "../../../../components/UI/Button/Button";

import useVolunteerNewPassword from "./useVolunteerNewPassword";

import * as translations from "../../../../translations";
import * as authTranslations from "../../Authentication.translations";
import styles from "../../Authentication.module.scss";

//TODO: Delete?
interface VolunteerNewPasswordProps {
    onSubmit(e: any): void;
}

export const VolunteerNewPassword = (props: VolunteerNewPasswordProps) => {
    const {
        passwordRef,
        passwordConfirmationRef,
        loading,
        handleSubmit,
    } = useVolunteerNewPassword();

    return (
        <>
            <div className={styles.AuthSection}>
                <div className={styles.TitleGroup}>
                    <h1 className={styles.Title}>
                        {authTranslations.recoveryAsVolunteerTitle}
                    </h1>
                    {/*<div className={styles.LinkSubtitle}>
                        <Link to="/login/volunteer/email">
                            {authTranslations.authGoBack}
                        </Link>
                    </div>*/}
                </div>

                <form onSubmit={props.onSubmit} className={styles.AuthForm}>
                    <label>
                        <div className={styles.AuthFormLabel}>
                            {translations.password}
                        </div>
                        <div className={styles.AuthFormInput}>
                            <input
                                type="password"
                                autoComplete="new-password"
                                ref={passwordRef}
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
                                type="password"
                                autoComplete="new-password"
                                ref={passwordConfirmationRef}
                                required
                            />
                        </div>
                    </label>

                    <div className={styles.ButtonGroup}>
                        <Button
                            colorStyle="White"
                            disabled={loading}
                            clicked={handleSubmit}
                        >
                            {authTranslations.createNewPasswordButton}
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};
