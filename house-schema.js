// load mongoose library
import mongoose from 'mongoose';
// create schema
const schema = mongoose.Schema({
    img: String,
    location: String,
    title: String,
    description: String,
    star: Number,
    price: String,
    total: String
}, {collection: 'house'}); // which collection name
export default schema; // export schema so it can be used elsewhere