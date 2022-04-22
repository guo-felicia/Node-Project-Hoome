import mongoose from 'mongoose';
const schema = mongoose.Schema({
    question: String,
    likes: Number,
    postedBy: {
        username: String
    }
}, {collection: 'questions'});
export default schema;