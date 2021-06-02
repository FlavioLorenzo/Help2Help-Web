import { Link } from "react-router-dom";

import Button from "../../../../components/UI/Button/Button";

// import useLogin from "./hooks/useLogin"

import * as translations from "../../../../translations";
import * as authTranslations from "../../Authentication.translations";
import styles from "../../Authentication.module.scss";

interface OrganizationSignUpProps {
    onSubmit(e: any): void;
}

export const OrganizationSignUp = (props: OrganizationSignUpProps) => {
    return (
        <>
            <div className={styles.LoginSection}>
                <div className={styles.TitleGroup}>
                    <h1 className={styles.Title}>
                        {authTranslations.signupAsOrganizationTitle}
                    </h1>
                </div>

                <form onSubmit={props.onSubmit} className={styles.LoginForm}>
                    <label>
                        <div className={styles.LoginFormLabel}>
                            {authTranslations.signupAsOrganizationName}
                        </div>
                        <div className={styles.LoginFormInput}>
                            <input type="text" autoComplete="organization" />
                        </div>
                    </label>

                    <label>
                        <div className={styles.LoginFormLabel}>
                            {translations.email}
                        </div>
                        <div className={styles.LoginFormInput}>
                            <input type="text" autoComplete="email" />
                        </div>
                    </label>

                    <label>
                        <div className={styles.LoginFormLabel}>
                            {translations.password}
                        </div>
                        <div className={styles.LoginFormInput}>
                            <input
                                type="password"
                                autoComplete="new-password"
                            />
                        </div>
                    </label>

                    <label>
                        <div className={styles.LoginFormLabel}>
                            {authTranslations.authConfirmPassword}
                        </div>
                        <div className={styles.LoginFormInput}>
                            <input
                                type="password"
                                autoComplete="new-password"
                            />
                        </div>
                    </label>

                    <div className={styles.ButtonGroup}>
                        <Button colorStyle="White">
                            {authTranslations.signupAsOrganizationButton}
                        </Button>
                    </div>
                </form>
            </div>

            <div className={styles.LoginSection}>
                <div className={styles.LinkText}>
                    <Link to="/login/organization">
                        {authTranslations.signupAsOrganizationAlreadySubscribed}
                    </Link>
                </div>
            </div>
        </>
    );
};
