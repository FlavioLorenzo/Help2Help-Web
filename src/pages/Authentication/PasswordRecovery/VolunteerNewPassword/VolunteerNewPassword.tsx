import Button from "../../../../components/ui/Button/Button";

import useVolunteerNewPassword from "./useVolunteerNewPassword";

import FullGradientFormField from "../../../../components/ui/FullGradientFormField/FullGradientFormField";

import * as translations from "../../../../translations";
import * as authTranslations from "../../Authentication.translations";

interface VolunteerNewPasswordProps {}

export const VolunteerNewPassword = (props: VolunteerNewPasswordProps) => {
    const { loading, handleSubmit, onSubmit, register, errors } =
        useVolunteerNewPassword();

    return (
        <>
            "
            <div className="title-group">
                <h1 className="title">
                    {authTranslations.recoveryAsVolunteerTitle}
                </h1>
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
