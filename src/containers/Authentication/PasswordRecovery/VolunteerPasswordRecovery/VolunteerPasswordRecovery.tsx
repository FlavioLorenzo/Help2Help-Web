import { Link } from "react-router-dom";

import Button from "../../../../components/UI/Button/Button";

import useVolunteerPasswordRecovery from "./useVolunteerPasswordRecovery";

import * as translations from "../../../../translations";
import * as authTranslations from "../../Authentication.translations";
import styles from "../../Authentication.module.scss";

//TODO: Delete?
interface VolunteerPasswordRecoveryProps {
    onSubmit(e: any): void;
}

export const VolunteerPasswordRecovery = (
    props: VolunteerPasswordRecoveryProps
) => {
    const { emailRef, loading, handleSubmit } = useVolunteerPasswordRecovery();

    return (
        <>
            <div className={styles.AuthSection}>
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

                <form onSubmit={props.onSubmit} className={styles.AuthForm}>
                    <label>
                        <div className={styles.AuthFormLabel}>
                            {translations.email}
                        </div>
                        <div className={styles.AuthFormInput}>
                            <input
                                type="email"
                                autoComplete="email"
                                ref={emailRef}
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
                            {authTranslations.recoverySendLinkButton}
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};
