import { Link } from "react-router-dom";

import Button from "../../../../components/UI/Button/Button";
// import useLogin from "./hooks/useLogin"

import * as translations from "../../Authentication.translations";
import styles from "../../Authentication.module.scss";

interface OrganizationLoginProps {
    onSubmit(e: any): void;
}

/**
 * This component is currently nearly identical to the VolunteerEmailLogin component.
 * They will be further diffferentiated in the future as they become more specialized for the two situations.
 */
export const OrganizationLogin = (props: OrganizationLoginProps) => {
    return (
        <>
            <div className={styles.LoginSection}>
                <div className={styles.Text}>
                    {translations.loginAsOrganization}
                </div>

                <form onSubmit={props.onSubmit} className={styles.LoginForm}>
                    <label>
                        <div className={styles.LoginFormLabel}>Email</div>
                        <div className={styles.LoginFormInput}>
                            <input type="email" autoComplete="email" />
                        </div>
                    </label>

                    <label>
                        <div className={styles.LoginFormLabel}>Password</div>
                        <div className={styles.LoginFormInput}>
                            <input
                                type="password"
                                autoComplete="current-password"
                            />
                        </div>
                    </label>

                    <div className={styles.ButtonGroup}>
                        <Button colorStyle="White">Login</Button>
                    </div>
                </form>
            </div>

            <div className={styles.LoginSection}>
                <div className={styles.LinkText}>
                    <Link to="/password-recovery/organization">
                        {translations.loginWithEmailPasswordForgotten}
                    </Link>
                </div>

                <div className={styles.LinkText}>
                    <Link to="/signup/organization">
                        {translations.loginRegisterAsOrganization}
                    </Link>
                </div>
            </div>
        </>
    );
};
