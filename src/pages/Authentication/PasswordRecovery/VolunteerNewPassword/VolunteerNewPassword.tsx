import Button from "../../../../components/ui/Button/Button";

import useVolunteerNewPassword from "./useVolunteerNewPassword";

import FullGradientFormField from "../../../../components/ui/FullGradientFormField/FullGradientFormField";

import * as translations from "../../../../translations";
import * as authTranslations from "../../Authentication.translations";
import FullGradientFormContainer from "../../../../components/ui/FullGradientFormContainer/FullGradientFormContainer";

interface VolunteerNewPasswordProps {
}

export const VolunteerNewPassword = (props: VolunteerNewPasswordProps) => {
    const {loading, handleSubmit, onSubmit, register, errors} =
        useVolunteerNewPassword();

    return (
        <FullGradientFormContainer>
            <div className="full-gradient-header"></div>

            <div className="full-gradient-title-group">
                <h1 className="full-gradient-title">
                    {authTranslations.recoveryAsVolunteerTitle}
                </h1>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="full-gradient-form-main-content">
                    <div className="full-gradient-form-section">
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
                    </div>
                </div>

                <div className="full-gradient-footer">
                    <div className="button-group">
                        <div className="button">
                            <Button submit colorStyle="White" disabled={loading}>
                                {authTranslations.createNewPasswordButton}
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </FullGradientFormContainer>
    );
};
