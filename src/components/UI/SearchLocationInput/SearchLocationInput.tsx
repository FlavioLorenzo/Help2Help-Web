/**
 * This component provides an input though which the user can insert his address
 * For further information please refer to the Google Places Autocomplete component documentation: https://tintef.github.io/react-google-places-autocomplete/docs/
 */

// TODO: Substitute Google Places Autocomplete with  https://github.com/hibiken/react-places-autocomplete
import { useState, useEffect } from "react";
import GooglePlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from "react-google-places-autocomplete";
import chroma from "chroma-js";

import { GoogleApiKey } from "../../../config/envConfig";
import styles from "./SearchLocationInput.module.scss";
import { SearchLocationInputType } from "./SearchLocationInput.types";

interface SearchLocationInputProps {
    /**
     * Text of the label for the form
     */
    label?: any;
    /**
     * Original value for the user's location
     */
    value?: string;
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
    const [currentValue, setCurrentValue] = useState<any>(null);

    const formInputClasses = [styles.FullGradientFormInput];

    const googleStyles = {
        input: (styles: any, { isFocused, isSelected }: any) => ({
            ...styles,
            color: "#838383",
        }),
        option: (styles: any, { isDisabled, isFocused, isSelected }: any) => {
            const h2hColor = chroma("#FF5789");
            return {
                ...styles,
                color: "#838383",
                backgroundColor: isFocused
                    ? h2hColor.alpha(0.1).css()
                    : "default",
                ":active": {
                    ...styles[":active"],
                    backgroundColor: h2hColor.alpha(0.3).css(),
                },
            };
        },
        singleValue: (provided: any) => ({
            ...styles,
            color: "#212529",
        }),
    };

    // TODO: Style error correctly... actually style every part of this mess correctly
    if (error) {
        formInputClasses.push(styles.Error);
    }

    // When the user provided address is inserted, it's latitude and longitude are retrieved and passed to the parent component
    useEffect(() => {
        if (!currentValue) return;

        geocodeByAddress(currentValue.label)
            .then((results) => getLatLng(results[0]))
            .then(({ lat, lng }) => {
                if (!onChange) return;
                const length: number = currentValue.value.terms.length;

                onChange({
                    label: currentValue.label,
                    address: {
                        street:
                            length >= 4
                                ? currentValue.value.terms[length - 4].value
                                : null,
                        city:
                            length >= 3
                                ? currentValue.value.terms[length - 3].value
                                : null,
                        province:
                            length >= 2
                                ? currentValue.value.terms[length - 2].value
                                : null,
                        country:
                            length >= 1
                                ? currentValue.value.terms[length - 1].value
                                : null,
                    },
                    coordinates: {
                        lat,
                        lng,
                    },
                });
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentValue /*, onChange*/]);

    return (
        <div className={styles.SearchLocationInput}>
            <label>
                <div className={styles.FullGradientFormLabel}>{label}</div>

                <div className={formInputClasses.join(" ")}>
                    <GooglePlacesAutocomplete
                        apiKey={GoogleApiKey}
                        autocompletionRequest={{
                            componentRestrictions: {
                                country: ["it"],
                            },
                        }}
                        selectProps={{
                            value: currentValue,
                            onChange: setCurrentValue,
                            styles: googleStyles,
                            defaultInputValue: value,
                        }}
                        onLoadFailed={(error) =>
                            console.error(
                                "Could not inject Google script",
                                error
                            )
                        }
                    />
                </div>
            </label>
        </div>
    );
};

export default SearchLocationInput;
