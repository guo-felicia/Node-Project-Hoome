// load mongoose library
import mongoose from 'mongoose';
// create schema
const schema = mongoose.Schema({
    img: String,
    location: String,
    title: String,
    description: String,
    star: {type: Number, default: 5},
    price: String,
    total: String,
    postby: String
}, {collection: 'houses'}); // which collection name
export default schema; // export schema so it can be used elsewhere