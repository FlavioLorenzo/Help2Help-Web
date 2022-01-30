import {Link} from "react-router-dom";

import useVolunteerStandardLogin from "./useVolunteerStandardLogin";

import Button from "../../../../components/ui/Button/Button";

import * as translations from "../../Authentication.translations";

import facebookLogo from "../../../../assets/images/facebookLogo.png";
import googleLogo from "../../../../assets/images/googleLogo.svg";
import FullGradientFormContainer from "../../../../components/ui/FullGradientFormContainer/FullGradientFormContainer";

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
        <FullGradientFormContainer>
            <div className="full-gradient-header"></div>

            <div className="full-gradient-title-group">
                <h1 className="full-gradient-title">{translations.loginAccessWith}</h1>
            </div>

            <div className="full-gradient-form-main-content">
                <div className="social-login">
                    <div className={["button-group", ""].join(" ")}>
                        <div className="button">
                            <Button
                                colorStyle="White"
                                clicked={onGoogleLoginClicked}
                            >
                                <img src={googleLogo} alt="Google logo"/>
                                Google
                            </Button>
                        </div>
                        <div className="button">
                            <Button
                                colorStyle="White"
                                clicked={onFacebookLoginClicked}
                            >
                                <img src={facebookLogo} alt="Facebook logo"/>
                                Facebook
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="second-title">{translations.loginInstead}</div>

                <div className="continue-with-email">
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
            </div>

            <div className="full-gradient-footer">
                <div className="link-text">
                    <Link to="/login/organization">
                        {translations.loginAsOrganizationRedirect}
                    </Link>
                </div>
            </div>
        </FullGradientFormContainer>
    );
};
