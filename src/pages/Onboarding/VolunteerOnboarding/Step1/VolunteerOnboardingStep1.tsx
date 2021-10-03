import {
    onboardingVolunteerStep1Body,
    onboardingVolunteerStep1Welcome,
} from "../VolunteerOnboarding.translations";

const VolunteerOnboardingStep1 = () => {
    return (
        <div className="onboarding-form-welcome-step">
            <h1>{onboardingVolunteerStep1Welcome}</h1>

            <p>{onboardingVolunteerStep1Body}</p>
        </div>
    );
};

export default VolunteerOnboardingStep1;
