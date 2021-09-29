/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * This component provides an input though which the user can insert his address
 * For further information please refer to the React Places Autocomplete component documentation: https://github.com/hibiken/react-places-autocomplete
 */

import { useState } from "react";

import styles from "./SearchLocationInput.module.scss";
import {
    SearchLocationInputAddressType,
    SearchLocationInputType,
} from "./SearchLocationInput.types";

import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from "react-places-autocomplete";

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
    const [address, setAddress] = useState(
        value ? value.formatted_address : ""
    );

    const formInputClasses = [styles.FullGradientFormInput];

    // TODO: Style error correctly... actually style every part of this mess correctly
    if (error) {
        formInputClasses.push(styles.Error);
    }

    const handleChange = (address: any) => {
        setAddress(address);
    };

    const populateAddress = (addressComponents: any) => {
        const address: SearchLocationInputAddressType = {};
        addressComponents.forEach((component: any) => {
            switch (component["types"][0]) {
                case "street_number":
                    address["street_number"] = component["long_name"];
                    break;
                case "route":
                    address["route"] = component["long_name"];
                    break;
                case "locality":
                    address["locality"] = component["long_name"];
                    break;
                case "administrative_area_level_1":
                    address["administrative_area_level_1"] =
                        component["long_name"];
                    break;
                case "administrative_area_level_2":
                    address["administrative_area_level_2"] =
                        component["short_name"];
                    break;
                case "country":
                    address["country"] = component["long_name"];
                    break;
                case "postal_code":
                    address["postal_code"] = component["long_name"];
                    break;
            }
        });

        return address;
    };

    const handleSelect = (address: any) => {
        let selectedValue: SearchLocationInputType;
        setAddress(address);

        geocodeByAddress(address)
            .then((results) => {
                const geocode = results[0];

                selectedValue = {
                    formatted_address: geocode.formatted_address,
                    place_id: geocode.place_id,
                    address: populateAddress(geocode.address_components),
                };

                return getLatLng(geocode);
            })
            .then((latLng) => {
                if (!onChange) return;

                selectedValue.coordinates = {
                    lat: latLng["lat"],
                    lng: latLng["lng"],
                };

                onChange(selectedValue);
            });
    };

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
