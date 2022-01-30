import SearchLocationInput from "../../../../components/ui/SearchLocationInput/SearchLocationInput";
import {SearchLocationInputType} from "../../../../components/ui/SearchLocationInput/SearchLocationInput.types";
import {
    onboardingVolunteerStepLocationInputLabel,
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

const VolunteerOnboardingStep3 = ({value, onChanged}: Step3Props) => {
    return (
        <div className="full-gradient-form-section">
            <SearchLocationInput
                label={onboardingVolunteerStepLocationInputLabel}
                value={value}
                onChange={onChanged}
            />
        </div>
    );
};

export default VolunteerOnboardingStep3;
