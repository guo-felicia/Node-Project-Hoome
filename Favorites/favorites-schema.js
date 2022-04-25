import mongoose from 'mongoose';

const schema = mongoose.Schema(
    {
        address: String,
        price: Object,
        rating: Number,
        images: Array,
        name: String,
        bathrooms: Number,
        bedrooms: Number,
        beds: Number
    }, {collection: 'favorites'});
export default schema;