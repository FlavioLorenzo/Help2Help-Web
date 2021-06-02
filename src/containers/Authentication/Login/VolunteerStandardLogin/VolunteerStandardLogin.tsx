import { Link } from "react-router-dom";

import Button from "../../../../components/UI/Button/Button";
// import useLogin from "./hooks/useLogin"

import * as translations from "../../Authentication.translations";
import styles from "../../Authentication.module.scss";

import { useHistory } from "react-router";

import facebookLogo from "../../../../assets/images/facebookLogo.png";
import googleLogo from "../../../../assets/images/googleLogo.svg";

interface StandardLoginProps {
    emailPageTextClicked(): void;
}

export const VolunteerStandardLogin = (props: StandardLoginProps) => {
    let history = useHistory();

    // Act upon detecting the click of the search bar
    const onEmailPageButtonClicked = (e: any) => {
        e.preventDefault();

        history.push({
            pathname: "/login/volunteer/email",
        });
    };

    return (
        <>
            <div className={styles.LoginSection}>
                <div className={styles.TitleGroup}>
                    <h1 className={styles.Title}>
                        {translations.loginAccessWith}
                    </h1>
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
                            clicked={onEmailPageButtonClicked}
                        >
                            {translations.loginContinueWithEmail}
                        </Button>
                    </div>
                </div>
            </div>

            <div className={styles.LoginSection}>
                <div className={styles.LinkText}>
                    <Link to="/login/organization">
                        {translations.loginOrganization}
                    </Link>
                </div>
            </div>
        </>
    );
};
