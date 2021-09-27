import { Link } from "react-router-dom";

import Button from "../../../../components/ui/Button/Button";
import FullGradientFormField from "../../../../components/ui/FullGradientFormField/FullGradientFormField";

import useVolunteerSignUp from "./useVolunteerSignUp";

import * as translations from "../../../../translations";
import * as authTranslations from "../../Authentication.translations";
import * as localTranslations from "./VolunteerSignUp.translations";

export const VolunteerSignUp = () => {
    const { loading, onSubmit, handleSubmit, register, errors } =
        useVolunteerSignUp();

    return (
        <>
            <div className="title-group">
                <h1 className="title">
                    {localTranslations.signupAsVolunteerTitle}
                </h1>
            </div>

            <div className="full-gradient-form-section">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="full-gradient-form"
                >
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

                    <div className="button-group">
                        <Button submit colorStyle="White" disabled={loading}>
                            {localTranslations.signupAsVolunteerButton}
                        </Button>
                    </div>
                </form>
            </div>

            <div className="full-gradient-form-section">
                <div className="link-text">
                    <Link to="/login">
                        {localTranslations.signupAsVolunteerAlreadySubscribed}
                    </Link>
                </div>
            </div>
        </>
    );
};
