import SearchLocationInput from "../../../../components/ui/SearchLocationInput/SearchLocationInput";
import {SearchLocationInputType} from "../../../../components/ui/SearchLocationInput/SearchLocationInput.types";
import {
    onboardingOrganizationStepLocationInputLabel,
    onboardingOrganizationStepLocationTitle,
} from "../OrganizationOnboarding.translations";

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

const OrganizationOnboardingStep3 = ({value, onChanged}: Step3Props) => {
    return (
        <>
            <h2>{onboardingOrganizationStepLocationTitle}</h2>

            <SearchLocationInput
                label={onboardingOrganizationStepLocationInputLabel}
                value={value}
                onChange={onChanged}
            />
        </>
    );
};

export default OrganizationOnboardingStep3;
