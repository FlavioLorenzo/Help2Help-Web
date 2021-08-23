import { Link } from "react-router-dom";

import useVolunteerStandardLogin from "./useVolunteerStandardLogin";

import Button from "../../../../components/UI/Button/Button";

import * as translations from "../../Authentication.translations";
import styles from "../../Authentication.module.scss";

import facebookLogo from "../../../../assets/images/facebookLogo.png";
import googleLogo from "../../../../assets/images/googleLogo.svg";

interface StandardLoginProps {
    emailPageTextClicked(): void;
}

export const VolunteerStandardLogin = (props: StandardLoginProps) => {
    const {
        onFacebookLoginClicked,
        onGoogleLoginClicked,
        onEmailPageButtonClicked,
    } = useVolunteerStandardLogin();

    return (
        <>
            <div className={styles.TitleGroup}>
                <h1 className={styles.Title}>{translations.loginAccessWith}</h1>
            </div>

            <div className={styles.AuthSection}>
                <div className={styles.ButtonGroup}>
                    <div className={styles.Button}>
                        <Button
                            colorStyle="White"
                            clicked={onGoogleLoginClicked}
                        >
                            <img src={googleLogo} alt="Google logo" />
                            Google
                        </Button>
                    </div>
                    <div className={styles.Button}>
                        <Button
                            colorStyle="White"
                            clicked={onFacebookLoginClicked}
                        >
                            <img src={facebookLogo} alt="Facebook logo" />
                            Facebook
                        </Button>
                    </div>
                </div>
            </div>

            <div className={styles.AuthSection}>
                <div className={styles.Text}>{translations.loginInstead}</div>
                <div className={styles.ButtonGroup}>
                    <div className={styles.Button}>
                        <Button
                            colorStyle="White"
                            clicked={onEmailPageButtonClicked}
                        >
                            {translations.loginContinueWithEmail}
                        </Button>
                    </div>
                </div>
            </div>

            <div className={styles.AuthSection}>
                <div className={styles.LinkText}>
                    <Link to="/login/organization">
                        {translations.loginAsOrganizationRedirect}
                    </Link>
                </div>
            </div>
        </>
    );
};
