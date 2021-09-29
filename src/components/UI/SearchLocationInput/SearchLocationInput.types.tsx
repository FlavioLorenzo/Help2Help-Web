export interface SearchLocationInputAddressType {
    street_number?: number;
    route?: string;
    locality?: string;
    administrative_area_level_1?: string;
    administrative_area_level_2?: string;
    country?: string;
    postal_code?: string;
}

export interface SearchLocationInputType {
    formatted_address: string;
    place_id: string;
    address: SearchLocationInputAddressType;
    coordinates?: {
        lat: number;
        lng: number;
    };
}
