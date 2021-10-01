import { useState } from "react";

import {
    SearchLocationInputAddressType,
    SearchLocationInputType,
} from "./SearchLocationInput.types";

import { geocodeByAddress, getLatLng } from "react-places-autocomplete";

interface useSearchLocationInputProps {
    /**
     * Original value for the user's location
     */
    value?: SearchLocationInputType;
    /**
     * Function triggered when address is selected
     */
    onChange?: (value: SearchLocationInputType) => void;
}

export default function useSearchLocationInput({
    value,
    onChange,
}: useSearchLocationInputProps) {
    const [address, setAddress] = useState(
        value ? value.formatted_address : ""
    );

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

    return {
        address,
        handleChange,
        handleSelect,
    };
}
