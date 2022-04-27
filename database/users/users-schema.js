import mongoose from 'mongoose';
const usersSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    j: {type: String, required: true},
    firstName: {type: String, default: 'New User'},
    lastName: {type: String, default: ''},
    signature: {type: String, default: ''},
    aboutyou: {type: String, default: ''},
    location: {type: String, default: ''},
    languages: {type: String, default: ''},
    jobs:{type: String, default: ''},
}, {collection: "users"})


export default usersSchema;