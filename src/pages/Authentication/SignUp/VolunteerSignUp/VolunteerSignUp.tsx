import {Link} from "react-router-dom";

import Button from "../../../../components/ui/Button/Button";
import FullGradientFormField from "../../../../components/ui/FullGradientFormField/FullGradientFormField";

import useVolunteerSignUp from "./useVolunteerSignUp";

import * as translations from "../../../../translations";
import * as authTranslations from "../../Authentication.translations";
import * as localTranslations from "./VolunteerSignUp.translations";
import FullGradientFormContainer from "../../../../components/ui/FullGradientFormContainer/FullGradientFormContainer";

export const VolunteerSignUp = () => {
    const {loading, onSubmit, handleSubmit, register, errors} =
        useVolunteerSignUp();

    return (
        <FullGradientFormContainer>
            <div className="full-gradient-header"></div>

            <div className="full-gradient-title-group">
                <h1 className="full-gradient-title">{localTranslations.signupAsVolunteerTitle}</h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="full-gradient-form-main-content">
                    <div className="full-gradient-form-section">
                        <FullGradientFormField
                            label={translations.firstName}
                            type="text"
                            registerLabel="firstName"
                            autoComplete="given-name"
                            maxLength={255}
                            error={
                                errors.firstName &&
                                authTranslations.formErrorFirstNameRequired
                            }
                            register={register}
                        />

                        <FullGradientFormField
                            label={translations.surname}
                            type="text"
                            registerLabel="lastName"
                            autoComplete="family-name"
                            maxLength={255}
                            error={
                                errors.lastName &&
                                authTranslations.formErrorLastNameRequired
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
                            <Button colorStyle="White" disabled={loading} submit>
                                {localTranslations.signupAsVolunteerButton}
                            </Button>
                        </div>
                    </div>

                    <div className="link-text">
                        <Link to="/login">
                            {localTranslations.signupAsVolunteerAlreadySubscribed}
                        </Link>
                    </div>
                </div>
            </form>
        </FullGradientFormContainer>
    );
};
