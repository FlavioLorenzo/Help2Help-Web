import { Link } from "react-router-dom";

import Button from "../../../../components/UI/Button/Button";

// import useLogin from "./hooks/useLogin"

import * as translations from "../../Authentication.translations";
import styles from "../../Authentication.module.scss";
import useVolunteerEmailLogin from "./useVolunteerEmailLogin";

interface VolunteerEmailLoginProps {
    onSubmit(e: any): void;
}

export const VolunteerEmailLogin = (props: VolunteerEmailLoginProps) => {
    const {
        emailRef,
        passwordRef,
        loading,
        handleSubmit,
    } = useVolunteerEmailLogin();

    return (
        <>
            <div className={styles.LoginSection}>
                <div className={styles.TitleGroup}>
                    <h1 className={styles.Title}>
                        {translations.loginAccessWithEmail}
                    </h1>
                    <div className={styles.LinkSubtitle}>
                        <Link to="/login">{translations.authGoBack}</Link>
                    </div>
                </div>

                <form onSubmit={props.onSubmit} className={styles.LoginForm}>
                    <label>
                        <div className={styles.LoginFormLabel}>Email</div>
                        <div className={styles.LoginFormInput}>
                            <input
                                type="email"
                                autoComplete="email"
                                ref={emailRef}
                                required
                            />
                        </div>
                    </label>

                    <label>
                        <div className={styles.LoginFormLabel}>Password</div>
                        <div className={styles.LoginFormInput}>
                            <input
                                type="password"
                                autoComplete="current-password"
                                ref={passwordRef}
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
                            Login
                        </Button>
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
