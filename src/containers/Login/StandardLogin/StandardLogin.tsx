import { Link } from "react-router-dom";

import Button from "../../../components/UI/Button/Button";
// import useLogin from "./hooks/useLogin"

import * as translations from "./StandardLogin.translations";
import styles from "../Login.module.scss";

import facebookLogo from "../../../assets/images/facebookLogo.png";
import googleLogo from "../../../assets/images/googleLogo.svg";

interface StandardLoginProps {
    emailPageTextClicked(): void;
}

const StandardLogin = (props: StandardLoginProps) => {
    return (
        <>
            <div className={styles.LoginSection}>
                <div className={styles.Text}>
                    {translations.loginAccessWith}
                </div>
                <div className={styles.ButtonGroup}>
                    <div className={styles.Button}>
                        <Button
                            colorStyle="White"
                            clicked={() => {
                                console.log("Clicked");
                            }}
                        >
                            <img src={googleLogo} alt="Google logo" />
                            Google
                        </Button>
                    </div>
                    <div className={styles.Button}>
                        <Button
                            colorStyle="White"
                            clicked={() => {
                                console.log("Clicked");
                            }}
                        >
                            <img src={facebookLogo} alt="Facebook logo" />
                            Facebook
                        </Button>
                    </div>
                </div>
            </div>

            <div className={styles.LoginSection}>
                <div className={styles.Text}>{translations.loginInstead}</div>
                <div className={styles.ButtonGroup}>
                    <div className={styles.Button}>
                        <Button
                            colorStyle="White"
                            clicked={props.emailPageTextClicked}
                        >
                            {translations.loginContinueWithEmail}
                        </Button>
                    </div>
                </div>
            </div>

            <div className={styles.LoginSection}>
                <div className={styles.LinkText}>
                    <Link to="/loginOrganization">
                        {translations.loginOrganization}
                    </Link>
                </div>
            </div>
        </>
    );
};

export default StandardLogin;
