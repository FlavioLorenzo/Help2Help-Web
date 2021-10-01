/**
 * This component provides an input though which the user can insert his address
 * For further information please refer to the React Places Autocomplete component documentation: https://github.com/hibiken/react-places-autocomplete
 */

import styles from "./SearchLocationInput.module.scss";
import { SearchLocationInputType } from "./SearchLocationInput.types";

import PlacesAutocomplete from "react-places-autocomplete";
import useSearchLocationInput from "./useSearchLocationInput";

interface SearchLocationInputProps {
    /**
     * Text of the label for the form
     */
    label?: any;
    /**
     * Original value for the user's location
     */
    value?: SearchLocationInputType;
    /**
     * Error text to show when error occurs
     */
    error?: any;

    /**
     * Function triggered when address is selected
     */
    onChange?: (value: SearchLocationInputType) => void;
}

const SearchLocationInput = ({
    label,
    value,
    error,
    onChange,
}: SearchLocationInputProps) => {
    const { address, handleChange, handleSelect } = useSearchLocationInput({
        value,
        onChange,
    });

    const formInputClasses = [styles.FullGradientFormInput];

    // TODO: Style error correctly... actually style every part of this mess correctly
    if (error) {
        formInputClasses.push(styles.Error);
    }

    return (
        <div className={styles.SearchLocationInputContainer}>
            <label>
                <div className={styles.FullGradientFormLabel}>{label}</div>

                <div className={formInputClasses.join(" ")}>
                    <PlacesAutocomplete
                        value={address}
                        onChange={handleChange}
                        onSelect={handleSelect}
                    >
                        {({
                            getInputProps,
                            suggestions,
                            getSuggestionItemProps,
                            loading,
                        }) => (
                            <div>
                                <input
                                    {...getInputProps({
                                        // TODO: Traduzione
                                        placeholder: "Ricerca ...",
                                        className: styles.SearchLocationInput,
                                    })}
                                />
                                <div
                                    className={
                                        styles.AutocompleteDropdownContainer
                                    }
                                >
                                    {loading && <div>Loading...</div>}
                                    {suggestions.map((suggestion) => {
                                        const className = suggestion.active
                                            ? styles.SuggestionItemActive
                                            : styles.SuggestionItem;

                                        return (
                                            <div
                                                {...getSuggestionItemProps(
                                                    suggestion,
                                                    {
                                                        className,
                                                    }
                                                )}
                                                key={suggestion.index}
                                            >
                                                <span>
                                                    {suggestion.description}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </PlacesAutocomplete>
                </div>
            </label>
        </div>
    );
};

export default SearchLocationInput;
