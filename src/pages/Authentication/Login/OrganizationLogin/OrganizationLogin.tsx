import {Link} from "react-router-dom";

import useOrganizationLogin from "./useOrganizationLogin";

import Button from "../../../../components/ui/Button/Button";
import FullGradientFormField from "../../../../components/ui/FullGradientFormField/FullGradientFormField";

import * as translations from "../../../../translations";
import * as authTranslations from "../../Authentication.translations";
import * as localTranslations from "./OrganizationLogin.translations";
import FullGradientFormContainer from "../../../../components/ui/FullGradientFormContainer/FullGradientFormContainer";

interface OrganizationLoginProps {
}

/**
 * This component is currently nearly identical to the VolunteerEmailLogin component.
 * They will be further diffferentiated in the future as they become more specialized for the two situations.
 */
export const OrganizationLogin = (props: OrganizationLoginProps) => {
    const {loading, onSubmit, handleSubmit, register, errors} =
        useOrganizationLogin();

    return (
        <FullGradientFormContainer>
            <div className="full-gradient-header"></div>

            <div className="full-gradient-title-group">
                <h1 className="full-gradient-title">{authTranslations.loginAsOrganization}</h1>

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
                                {authTranslations.loginAsOrganization}
                            </Button>
                        </div>
                    </div>

                    <div className="link-text">
                        <Link to="/password-recovery/organization">
                            {localTranslations.loginWithEmailPasswordForgotten}
                        </Link>
                    </div>

                    <div className="link-text">
                        <Link to="/signup/organization">
                            {localTranslations.loginRegisterAsOrganization}
                        </Link>
                    </div>
                </div>
            </form>
        </FullGradientFormContainer>
    );
};
