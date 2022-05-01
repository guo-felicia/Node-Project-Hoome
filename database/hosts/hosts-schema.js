import mongoose from 'mongoose';
const hostsSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    identity: {type: String, default: 'host', required: true}, //newly added
    username: {type: String, required: true, unique: true}, // aka profile id
    password: {type: String, required: true},
    firstName: {type: String, default: 'New User'},
    lastName: {type: String, default: ''},
    signature: {type: String, default: ''},
    aboutyou: {type: String, default: ''},
    location: {type: String, default: ''},
    languages: {type: String, default: ''},
    jobs:{type: String, default: ''},
    houses: {type: Array, default: []}, //newly added
}, {collection: "users"})


export default hostsSchema;