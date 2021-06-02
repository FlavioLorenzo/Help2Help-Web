import { Link } from "react-router-dom";

import Button from "../../../../components/UI/Button/Button";

// import useLogin from "./hooks/useLogin"

import * as translations from "../../../../translations";
import * as authTranslations from "../../Authentication.translations";
import styles from "../../Authentication.module.scss";

interface VolunteerPasswordRecoveryProps {
    onSubmit(e: any): void;
}

export const VolunteerPasswordRecovery = (
    props: VolunteerPasswordRecoveryProps
) => {
    return (
        <>
            <div className={styles.LoginSection}>
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

                <form onSubmit={props.onSubmit} className={styles.LoginForm}>
                    <label>
                        <div className={styles.LoginFormLabel}>
                            {translations.email}
                        </div>
                        <div className={styles.LoginFormInput}>
                            <input type="email" autoComplete="email" />
                        </div>
                    </label>

                    <div className={styles.ButtonGroup}>
                        <Button colorStyle="White">
                            {authTranslations.recoverySendLinkButton}
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};
