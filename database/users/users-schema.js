import mongoose from 'mongoose';
const usersSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    identity: {type: String, default: 'tenant', required: true},
    username: {type: String, required: true, unique: true}, // aka profile id
    password: {type: String, required: true},
    firstName: {type: String, default: 'New User'},
    lastName: {type: String, default: ''},
    signature: {type: String, default: ''},
    aboutyou: {type: String, default: ''},
    location: {type: String, default: ''},
    languages: {type: String, default: ''},
    jobs:{type: String, default: ''},
    followers: {type: Array, default: []},
    followings: {type: Array, default: []},
}, {collection: "users"})


export default usersSchema;