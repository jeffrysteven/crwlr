import { find, setCollection } from "../dbConnection";

setCollection('products');

export = [
    {
        method: 'GET',
        path: '/products',
        handler: (request, h) => find()
    },
];