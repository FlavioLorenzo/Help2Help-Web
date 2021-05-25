import { Link } from "react-router-dom";

import Button from "../../../../components/UI/Button/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

// import useLogin from "./hooks/useLogin"

import * as translations from "../../Authentication.translations";
import styles from "../../Authentication.module.scss";

interface OrganizationPasswordRecoveryProps {
    onSubmit(e: any): void;
}

export const OrganizationPasswordRecovery = (
    props: OrganizationPasswordRecoveryProps
) => {
    return (
        <>
            <div className={styles.LoginSection}>
                {/* TODO: Ask Elisa to make this part appealing */}
                <div className={styles.BackToStandardButton}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>

                <div className={styles.Text}>
                    {translations.loginAccessWithEmail}
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
                    <Link to="/password-recovery">
                        {translations.loginWithEmailPasswordForgotten}
                    </Link>
                </div>

                <div className={styles.LinkText}>
                    <Link to="/signup">
                        {translations.loginRegisterWithEmail}
                    </Link>
                </div>
            </div>
        </>
    );
};
