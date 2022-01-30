import {useAuth} from "../../services/auth/AuthContext";

import VolunteerOnboarding from "./VolunteerOnboarding/VolunteerOnboarding";
import OrganizationOnboarding from "./OrganizationOnboarding/OrganizationOnboarding";

import useScript from "../../hooks/useScript";
import {GCPApiKey} from "../../config/envConfig";

const Onboarding = () => {
    const {type} = useAuth();

    const onboardingType = (type === "organization") ? <OrganizationOnboarding/> : <VolunteerOnboarding/>;

    useScript(
        "gmap-script",
        "https://maps.googleapis.com/maps/api/js?key=" +
        GCPApiKey +
        "&libraries=places"
    );

    return (
        <>{onboardingType}</>
    );
};

export default Onboarding;
