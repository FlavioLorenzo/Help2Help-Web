import {
    onboardingVolunteerFinalStepBody1,
    onboardingVolunteerFinalStepBody2,
} from "../VolunteerOnboarding.translations";

const VolunteerOnboardingStep5 = () => {
    return (
        <div className="onboarding-form-welcome-step">
            <p>{onboardingVolunteerFinalStepBody1}</p>
            <p>{onboardingVolunteerFinalStepBody2}</p>
        </div>
    );
};

export default VolunteerOnboardingStep5;
