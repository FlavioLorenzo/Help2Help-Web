import {Link} from "react-router-dom";

import FullGradientFormField from "../../../../components/ui/FullGradientFormField/FullGradientFormField";
import Button from "../../../../components/ui/Button/Button";

import useOrganizationSignUp from "./useOrganizationSignUp";

import * as translations from "../../../../translations";
import * as authTranslations from "../../Authentication.translations";
import * as localTranslations from "./OrganizationSignUp.translations";
import FullGradientFormContainer from "../../../../components/ui/FullGradientFormContainer/FullGradientFormContainer";

interface OrganizationSignUpProps {
}

export const OrganizationSignUp = (props: OrganizationSignUpProps) => {
    const {loading, onSubmit, handleSubmit, register, errors} =
        useOrganizationSignUp();

    return (
        <FullGradientFormContainer>
            <div className="full-gradient-header"></div>

            <div className="full-gradient-title-group">
                <h1 className="full-gradient-title">{localTranslations.signupAsOrganizationTitle}</h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="full-gradient-form-main-content">
                    <div className="full-gradient-form-section">
                        <FullGradientFormField
                            label={translations.organizationName}
                            type="text"
                            registerLabel="organizationName"
                            autoComplete="organization"
                            maxLength={255}
                            error={
                                errors.organizationName &&
                                authTranslations.formErrorFirstNameRequired
                            }
                            register={register}
                        />

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

                        <FullGradientFormField
                            label={authTranslations.authConfirmPassword}
                            type="password"
                            registerLabel="passwordConfirmation"
                            autoComplete="new-password"
                            maxLength={32}
                            error={
                                errors.passwordConfirmation &&
                                authTranslations.formErrorPasswordMustMatch
                            }
                            register={register}
                        />
                    </div>
                </div>

                <div className="full-gradient-footer">
                    <div className="button-group">
                        <div className="button">
                            <Button submit colorStyle="White" disabled={loading}>
                                {localTranslations.signupAsOrganizationButton}
                            </Button>
                        </div>
                    </div>

                    <div className="link-text">
                        <Link to="/login/organization">
                            {localTranslations.signupAsOrganizationAlreadySubscribed}
                        </Link>
                    </div>
                </div>
            </form>
        </FullGradientFormContainer>
    );
};
