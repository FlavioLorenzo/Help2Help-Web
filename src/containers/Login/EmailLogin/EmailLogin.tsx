import { Link } from "react-router-dom";

import Button from "../../../components/UI/Button/Button";
// import useLogin from "./hooks/useLogin"

import * as translations from "./EmailLogin.translations";
import styles from "../Login.module.scss";

interface EmailLoginProps {
    onSubmit(e: any): void;
}

const EmailLogin = (props: EmailLoginProps) => {
    return (
        <>
            <div className={styles.LoginSection}>
                <div className={styles.Text}>
                    {translations.loginAccessWith}
                </div>

                <form onSubmit={props.onSubmit}>
                    <label>
                        Email
                        <input type="email" />
                    </label>

                    <label>
                        Password
                        <input type="password" />
                    </label>

                    <div className={styles.ButtonGroup}>
                        <Button colorStyle="White">Login</Button>
                    </div>
                </form>
            </div>

            <div className={styles.LoginSection}>
                <div className={styles.LinkText}>
                    <Link to="/passwordRecovery">
                        {translations.loginPasswordForgotten}
                    </Link>
                </div>

                <div className={styles.LinkText}>
                    <Link to="/register">{translations.loginRegister}</Link>
                </div>
            </div>
        </>
    );
};

export default EmailLogin;
