import mongoose from 'mongoose';
const usersSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    // firstName: String,
    // lastName: String,
    // signature: String,
    // aboutyou: String,
    // location: String,
    // languages: String,
    // jobs: String,
}, {collection: "users"})

const userSchema = mongoose.Schema({

    role:{type:String, enum:['STUDENT', 'FACULTY']}

})

export default usersSchema;