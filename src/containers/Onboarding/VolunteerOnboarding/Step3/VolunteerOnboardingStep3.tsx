import SearchLocationInput from "../../../../components/UI/SearchLocationInput/SearchLocationInput";
import { SearchLocationInputType } from "../../../../components/UI/SearchLocationInput/SearchLocationInput.types";

interface Step3Props {
    /**
     * Structure representing the value retrieved by the Search Location Input box
     */
    value?: string;
    /**
     * Function triggered when state changes
     */
    onChanged?: (value: SearchLocationInputType) => void;
}

const VolunteerOnboardingStep3 = ({ value, onChanged }: Step3Props) => {
    return (
        <>
            <h2>Dove vorresti cercare opportunità di volontariato?</h2>

            <SearchLocationInput
                label="Inserisci un indirizzo o città"
                value={value}
                onChange={onChanged}
            />
        </>
    );
};

export default VolunteerOnboardingStep3;
