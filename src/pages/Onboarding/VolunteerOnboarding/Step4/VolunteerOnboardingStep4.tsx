import {
    onboardingVolunteerFinalStepBody1,
    onboardingVolunteerFinalStepBody2,
    onboardingVolunteerFinalStepTitle,
} from "../VolunteerOnboarding.translations";

const VolunteerOnboardingStep4 = () => {
    return (
        <div className="onboarding-form-welcome-step">
            <h1>{onboardingVolunteerFinalStepTitle}</h1>

            <p>{onboardingVolunteerFinalStepBody1}</p>
            <p>{onboardingVolunteerFinalStepBody2}</p>
        </div>
    );
};

export default VolunteerOnboardingStep4;
