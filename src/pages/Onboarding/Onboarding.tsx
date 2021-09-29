import { useAuth } from "../../services/auth/AuthContext";

import FullGradientFormContainer from "../../components/ui/FullGradientFormContainer/FullGradientFormContainer";
import VolunteerOnboarding from "./VolunteerOnboarding/VolunteerOnboarding";
import useScript from "../../hooks/useScript";
import { GCPApiKey } from "../../config/envConfig";

const Onboarding = () => {
    const { type } = useAuth();

    const onboardingType = <VolunteerOnboarding />;
    if (type === "organization") console.log("organization");

    useScript(
        "gmap-script",
        "https://maps.googleapis.com/maps/api/js?key=" +
            GCPApiKey +
            "&libraries=places"
    );

    return (
        <FullGradientFormContainer>{onboardingType}</FullGradientFormContainer>
    );
};

export default Onboarding;
