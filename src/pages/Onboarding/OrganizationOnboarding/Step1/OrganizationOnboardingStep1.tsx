import {
    onboardingOrganizationStep1Body,
    onboardingOrganizationStep1Welcome,
} from "../OrganizationOnboarding.translations";

const OrganizationOnboardingStep1 = () => {
    return (
        <div className="onboarding-form-welcome-step">
            <h1>{onboardingOrganizationStep1Welcome}</h1>

            <p>{onboardingOrganizationStep1Body}</p>
        </div>
    );
};

export default OrganizationOnboardingStep1;
