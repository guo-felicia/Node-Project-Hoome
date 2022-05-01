// load mongoose library
import mongoose from 'mongoose';
// create schema
const schema = mongoose.Schema({
    img: String,
    location: String,
    title: String,
    description: String,
    rating: Number,
    price: String,
    total: String,
    postby: String
}, {collection: 'houses'}); // which collection name
export default schema; // export schema so it can be used elsewhere