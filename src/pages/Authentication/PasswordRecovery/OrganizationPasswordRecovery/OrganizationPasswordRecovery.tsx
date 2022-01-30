import {Link} from "react-router-dom";
import useOrganizationPasswordRecovery from "./useOrganizationPasswordRecovery";

import Button from "../../../../components/ui/Button/Button";
import FullGradientFormField from "../../../../components/ui/FullGradientFormField/FullGradientFormField";

import * as translations from "../../../../translations";
import * as authTranslations from "../../Authentication.translations";
import FullGradientFormContainer from "../../../../components/ui/FullGradientFormContainer/FullGradientFormContainer";

interface OrganizationPasswordRecoveryProps {
}

export const OrganizationPasswordRecovery = (
    props: OrganizationPasswordRecoveryProps
) => {
    const {loading, onSubmit, handleSubmit, register, errors} =
        useOrganizationPasswordRecovery();

    return (
        <FullGradientFormContainer>
            <div className="full-gradient-header"></div>

            <div className="full-gradient-title-group">
                <h1 className="full-gradient-title">
                    {authTranslations.recoveryAsOrganizationTitle}
                </h1>

                <div className="link-subtitle">
                    <Link to="/login/organization">
                        {authTranslations.authGoBack}
                    </Link>
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
                    </div>
                </div>

                <div className="full-gradient-footer">
                    <div className="button-group">
                        <div className="button">
                            <Button submit colorStyle="White" disabled={loading}>
                                {authTranslations.recoverySendLinkButton}
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </FullGradientFormContainer>
    );
};
