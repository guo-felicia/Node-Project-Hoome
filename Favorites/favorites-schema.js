import mongoose from 'mongoose';

const schema = mongoose.Schema({
        address: String,
        rating: Number,
        images: Array,
        name: String,
        bathrooms: Number,
        bedrooms: Number,
        beds: Number,
        postedBy: String,
}, {collection: 'favorites'});
export default schema;