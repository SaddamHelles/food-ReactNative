import { useState, useEffect } from 'react';
import yelpApi from '../api/yelp';

interface Coordinates {
    latitude: number;
    longitude: number;
}

interface Category {
    alias: string;
    title: string;
}

interface Location {
    address1: string;
    address2: string;
    address3: string;
    city: string;
    zip_code: string;
    country: string;
    state: string;
    display_address: string[];
}

export interface Business {
    id: string;
    alias: string;
    name: string;
    image_url: string;
    is_closed: boolean;
    url: string;
    review_count: number;
    categories: Category[];
    rating: number;
    coordinates: Coordinates;
    transactions: string[];
    price: string;
    location: Location;
    phone: string;
    display_phone: string;
    distance: number;
}

interface YelpResponse {
    businesses: Business[];
}
export default () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [results, setResults] = useState<YelpResponse>();

    const searchApi = async (searchTerm: string) => {
        try {
            const { data } = await yelpApi.get<YelpResponse>('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'US',
                },
            });
            setResults(data);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    };

    useEffect(() => {
        searchApi('food ');
    }, []);

    return { searchApi, results, errorMessage };
};
