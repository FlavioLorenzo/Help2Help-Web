import { Link } from "react-router-dom";

import Button from "../../../../components/UI/Button/Button";
import FullGradientFormField from "../../../../components/UI/FullGradientFormField/FullGradientFormField";

import useOrganizationNewPassword from "./useOrganizationNewPassword";

import * as translations from "../../../../translations";
import * as authTranslations from "../../Authentication.translations";

interface OrganizationNewPasswordProps {}

export const OrganizationNewPassword = (
    props: OrganizationNewPasswordProps
) => {
    const {
        loading,
        handleSubmit,
        onSubmit,
        register,
        errors,
    } = useOrganizationNewPassword();

    return (
        <>
            <div className="title-group">
                <h1 className="title">
                    {authTranslations.recoveryAsOrganizationTitle}
                </h1>
                <div className="link-subtitle">
                    <Link to="/login/organization">
                        {authTranslations.authGoBack}
                    </Link>
                </div>
            </div>

            <div className="full-gradient-form-section">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="full-gradient-form"
                >
                    <FullGradientFormField
                        label={translations.password}
                        type="password"
                        registerLabel="password"
                        autoComplete="new-password"
                        maxLength={32}
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
                            {authTranslations.createNewPasswordButton}
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};
