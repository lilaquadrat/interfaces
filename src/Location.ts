export interface Location {
    place_id: string;
    licence: string;
    osm_type: string;
    osm_id: string;
    boundingbox: string[];
    lat: string;
    lon: string;
    display_name: string;
    class: string;
    type: string;
    importance: number;
    address: {
        name: string;
        house_number: string;
        road: string;
        neighbourhood: string;
        suburb: string;
        city: string;
        state: string;
        postcode: string;
        country: string;
        country_code: string;
    };
}
