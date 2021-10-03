import SearchLocationInput from "../../../../components/ui/SearchLocationInput/SearchLocationInput";
import { SearchLocationInputType } from "../../../../components/ui/SearchLocationInput/SearchLocationInput.types";
import {
    onboardingVolunteerStepLocationInputLabel,
    onboardingVolunteerStepLocationTitle,
} from "../VolunteerOnboarding.translations";

interface Step3Props {
    /**
     * Structure representing the value retrieved by the Search Location Input box
     */
    value?: SearchLocationInputType;
    /**
     * Function triggered when state changes
     */
    onChanged?: (value: SearchLocationInputType) => void;
}

const VolunteerOnboardingStep3 = ({ value, onChanged }: Step3Props) => {
    return (
        <>
            <h2>{onboardingVolunteerStepLocationTitle}</h2>

            <SearchLocationInput
                label={onboardingVolunteerStepLocationInputLabel}
                value={value}
                onChange={onChanged}
            />
        </>
    );
};

export default VolunteerOnboardingStep3;
