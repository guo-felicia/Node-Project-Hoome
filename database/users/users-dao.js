import usersModel from "./users-model.js";

const findAllUsers = () => {
    return usersModel.find()
}
const findUserById = (id) => {
    return usersModel.findById(id)
}
const findUserByEmail = (email) => {
    // return usersModel.findOne({email: email})
    return usersModel.findOne({email})
}

const findUserByUsername = (username) => {
    return usersModel.findOne({'username' : username})
}

const findUserByCredentials = (email, password) => {
    return usersModel.findOne({email, password})
    // return usersModel.findOne({
    //   email: email,
    //   password: password
    // })
}
const createUser = (user) => {
    return usersModel.create(user)
}
const deleteUser = (id) => {
    return usersModel.deleteOne({_id: id})
}
const updateUser = (id, updatedUser) => {
    return usersModel.updateOne(
        {_id: id},
        {$set: updatedUser}
    )
}

const updateUserInfo = (email, updatedUser) => {
    return usersModel.updateOne(
        {email: email},
        {$set: updatedUser}
    )
}

const updateFollowing = (username, following) => {
    return usersModel.updateOne(
        {username: username},
        {$push: {followers: following}}
    )
}


const usersDao = {
    findAllUsers, findUserById, findUserByEmail, findUserByUsername,
    findUserByCredentials, createUser, deleteUser,
    updateUser, updateUserInfo, updateFollowing
}

export default usersDao;