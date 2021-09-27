import { Link } from "react-router-dom";

import useVolunteerStandardLogin from "./useVolunteerStandardLogin";

import Button from "../../../../components/ui/Button/Button";

import * as translations from "../../Authentication.translations";

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
            <div className="title-group">
                <h1 className="title">{translations.loginAccessWith}</h1>
            </div>

            <div className="full-gradient-form-section">
                <div className="button-group">
                    <div className="button">
                        <Button
                            colorStyle="White"
                            clicked={onGoogleLoginClicked}
                        >
                            <img src={googleLogo} alt="Google logo" />
                            Google
                        </Button>
                    </div>
                    <div className="button">
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

            <div className="full-gradient-form-section">
                <div className="text">{translations.loginInstead}</div>
                <div className="button-group">
                    <div className="button">
                        <Button
                            colorStyle="White"
                            clicked={onEmailPageButtonClicked}
                        >
                            {translations.loginContinueWithEmail}
                        </Button>
                    </div>
                </div>
            </div>

            <div className="full-gradient-form-section">
                <div className="link-text">
                    <Link to="/login/organization">
                        {translations.loginAsOrganizationRedirect}
                    </Link>
                </div>
            </div>
        </>
    );
};
