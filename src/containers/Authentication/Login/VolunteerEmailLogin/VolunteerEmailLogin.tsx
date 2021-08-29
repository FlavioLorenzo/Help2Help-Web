import { Link } from "react-router-dom";

import Button from "../../../../components/UI/Button/Button";
import FullGradientFormField from "../../../../components/UI/FullGradientFormField/FullGradientFormField";

import * as translations from "../../../../translations";
import * as authTranslations from "../../Authentication.translations";
import * as localTranslations from "./VolunteerEmailLogin.translations";
import useVolunteerEmailLogin from "./useVolunteerEmailLogin";

interface VolunteerEmailLoginProps {}

export const VolunteerEmailLogin = (props: VolunteerEmailLoginProps) => {
    const {
        loading,
        onSubmit,
        handleSubmit,
        register,
        errors,
    } = useVolunteerEmailLogin();

    return (
        <>
            <div className="title-group">
                <h1 className="title">
                    {localTranslations.loginAccessWithEmail}
                </h1>
                <div className="link-subtitle">
                    <Link to="/login">{authTranslations.authGoBack}</Link>
                </div>
            </div>

            <div className="full-gradient-form-section">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="full-gradient-form"
                >
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

                    <div className="button-group">
                        <Button colorStyle="White" disabled={loading} submit>
                            {authTranslations.loginStandardMessage}
                        </Button>
                    </div>
                </form>
            </div>

            <div className="full-gradient-form-section">
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
        </>
    );
};
