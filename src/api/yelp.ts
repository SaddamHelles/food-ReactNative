import axios from 'axios';

const yelpApi = axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        'Content-Type': 'application/json',
        Authorization:
            'Bearer sMRC4Dx3wjDyEQwEFYsXceco4Dv4AEv4SVP8BrnlLR0ruldW_-7ys_jrkemAqIGqNNCwwyaimTHTpydkjafKPhdXyxwTyFLASUmsYUT4gQQA8me53K86qr8TbPrPZHYx',
    },
    transformRequest: [
        data => {
            return JSON.stringify(data);
        },
    ],
    transformResponse: [
        data => {
            return JSON.parse(data);
        },
    ],
});

export default yelpApi;
