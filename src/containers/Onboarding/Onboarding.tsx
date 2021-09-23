import { useAuth } from "../../contexts/AuthContext";

import FullGradientFormContainer from "../../components/UI/FullGradientFormContainer/FullGradientFormContainer";
import VolunteerOnboarding from "./VolunteerOnboarding/VolunteerOnboarding";

const Onboarding = () => {
    const { type } = useAuth();

    const onboardingType = <VolunteerOnboarding />;
    if (type === "organization") console.log("organization");

    return (
        <FullGradientFormContainer>{onboardingType}</FullGradientFormContainer>
    );
};

export default Onboarding;
