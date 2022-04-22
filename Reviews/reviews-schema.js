import mongoose from 'mongoose';

const schema = mongoose.Schema({
    reviews: String,
    likes: Number,
    postedBy: {
        username: String
    }
}, {collection: 'reviews'});
export default schema;