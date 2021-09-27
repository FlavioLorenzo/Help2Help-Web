import { Link } from "react-router-dom";

import useOrganizationLogin from "./useOrganizationLogin";

import Button from "../../../../components/ui/Button/Button";
import FullGradientFormField from "../../../../components/ui/FullGradientFormField/FullGradientFormField";

import * as translations from "../../../../translations";
import * as authTranslations from "../../Authentication.translations";
import * as localTranslations from "./OrganizationLogin.translations";

interface OrganizationLoginProps {}

/**
 * This component is currently nearly identical to the VolunteerEmailLogin component.
 * They will be further diffferentiated in the future as they become more specialized for the two situations.
 */
export const OrganizationLogin = (props: OrganizationLoginProps) => {
    const { loading, onSubmit, handleSubmit, register, errors } =
        useOrganizationLogin();

    return (
        <>
            <div className="title-group">
                <h1 className="title">
                    {authTranslations.loginAsOrganization}
                </h1>
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
                            {authTranslations.loginAsOrganization}
                        </Button>
                    </div>
                </form>
            </div>

            <div className="full-gradient-form-section">
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
        </>
    );
};
