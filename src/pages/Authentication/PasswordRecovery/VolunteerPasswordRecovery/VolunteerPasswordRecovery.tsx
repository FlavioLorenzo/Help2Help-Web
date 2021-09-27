import { Link } from "react-router-dom";

import FullGradientFormField from "../../../../components/ui/FullGradientFormField/FullGradientFormField";
import Button from "../../../../components/ui/Button/Button";

import useVolunteerPasswordRecovery from "./useVolunteerPasswordRecovery";

import * as translations from "../../../../translations";
import * as authTranslations from "../../Authentication.translations";

export const VolunteerPasswordRecovery = () => {
    const { loading, onSubmit, handleSubmit, register, errors } =
        useVolunteerPasswordRecovery();

    return (
        <>
            <div className="title-group">
                <h1 className="title">
                    {authTranslations.recoveryAsVolunteerTitle}
                </h1>
                <div className="link-subtitle">
                    <Link to="/login/volunteer/email">
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
