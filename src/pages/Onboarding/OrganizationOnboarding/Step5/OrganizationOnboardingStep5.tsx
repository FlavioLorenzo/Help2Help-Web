import {
    onboardingOrganizationFinalStepBody1,
    onboardingOrganizationFinalStepBody2,
    onboardingOrganizationFinalStepTitle,
} from "../OrganizationOnboarding.translations";

const OrganizationOnboardingStep5 = () => {
    return (
        <div className="onboarding-form-welcome-step">
            <h1>{onboardingOrganizationFinalStepTitle}</h1>

            <p>{onboardingOrganizationFinalStepBody1}</p>
            <p>{onboardingOrganizationFinalStepBody2}</p>
        </div>
    );
};

export default OrganizationOnboardingStep5;
