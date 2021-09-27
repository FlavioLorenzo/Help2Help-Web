import { Link } from "react-router-dom";
import useOrganizationPasswordRecovery from "./useOrganizationPasswordRecovery";

import Button from "../../../../components/ui/Button/Button";
import FullGradientFormField from "../../../../components/ui/FullGradientFormField/FullGradientFormField";

import * as translations from "../../../../translations";
import * as authTranslations from "../../Authentication.translations";

interface OrganizationPasswordRecoveryProps {}

export const OrganizationPasswordRecovery = (
    props: OrganizationPasswordRecoveryProps
) => {
    const { loading, onSubmit, handleSubmit, register, errors } =
        useOrganizationPasswordRecovery();

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

                    <div className="button-group">
                        <Button submit colorStyle="White" disabled={loading}>
                            {authTranslations.recoverySendLinkButton}
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};
