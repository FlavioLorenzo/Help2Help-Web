export interface SearchLocationInputType {
    label: string;
    address: {
        street: string;
        city: string;
        province: string;
        country: string;
    };
    coordinates: {
        lat: number;
        lng: number;
    };
}
