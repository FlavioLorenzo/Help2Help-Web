import {Link} from "react-router-dom";

import Button from "../../../../components/ui/Button/Button";
import FullGradientFormField from "../../../../components/ui/FullGradientFormField/FullGradientFormField";

import * as translations from "../../../../translations";
import * as authTranslations from "../../Authentication.translations";
import * as localTranslations from "./VolunteerEmailLogin.translations";
import useVolunteerEmailLogin from "./useVolunteerEmailLogin";
import FullGradientFormContainer from "../../../../components/ui/FullGradientFormContainer/FullGradientFormContainer";

interface VolunteerEmailLoginProps {
}

export const VolunteerEmailLogin = (props: VolunteerEmailLoginProps) => {
    const {loading, onSubmit, handleSubmit, register, errors} =
        useVolunteerEmailLogin();

    return (
        <FullGradientFormContainer>
            <div className="full-gradient-header"></div>

            <div className="full-gradient-title-group">
                <h1 className="full-gradient-title">{localTranslations.loginAccessWithEmail}</h1>

                <div className="link-subtitle">
                    <Link to="/login">{authTranslations.authGoBack}</Link>
                </div>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="full-gradient-form-main-content">
                    <div className="full-gradient-form-section">
                        <FullGradientFormField
                            label={translations.email}
                            type="email"
                            registerLabel="email"
                            autoComplete="email"
                            maxLength={255}
                            error={
                                errors.email &&
                                authTranslations.formErrorEmailRequired
                            }
                            register={register}
                        />

                        <FullGradientFormField
                            label={translations.password}
                            type="password"
                            registerLabel="password"
                            autoComplete="new-password"
                            maxLength={255}
                            error={
                                errors.password &&
                                authTranslations.formErrorPasswordRequired
                            }
                            register={register}
                        />
                    </div>
                </div>

                <div className="full-gradient-footer">
                    <div className="button-group">
                        <div className="button">
                            <Button colorStyle="White" disabled={loading} submit>
                                {authTranslations.loginStandardMessage}
                            </Button>
                        </div>
                    </div>

                    <div className="link-text">
                        <Link to="/password-recovery">
                            {localTranslations.loginWithEmailPasswordForgotten}
                        </Link>
                    </div>

                    <div className="link-text">
                        <Link to="/signup">
                            {localTranslations.loginRegisterWithEmail}
                        </Link>
                    </div>
                </div>
            </form>
        </FullGradientFormContainer>
    );
};
