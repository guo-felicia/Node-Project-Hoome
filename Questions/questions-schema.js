import mongoose from 'mongoose';

const schema = mongoose.Schema(
    {
        question: String,
        likes: Number,
        dislikes: Number,
        postedBy: {
            firstName: String,
            username: String
        },
        avatar: String
    }, {collection: 'questions'});
export default schema;