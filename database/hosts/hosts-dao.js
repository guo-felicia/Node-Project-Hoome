import hostsModel from "./hosts-model.js";

const findAllUsers = () => {
    return hostsModel.find()
}
const findUserById = (id) => {
    return hostsModel.findById(id)
}
const findUserByEmail = (email) => {
    // return usersModel.findOne({email: email})
    return hostsModel.findOne({email})
}
const findUserByUsername = (username) => {
    return hostsModel.findOne({'username' : username})
}

const findUserByCredentials = (email, password) => {
    return hostsModel.findOne({email, password})
    // return usersModel.findOne({
    //   email: email,
    //   password: password
    // })
}
const createUser = (user) => {
    return hostsModel.create(user)
}
const deleteUser = (id) => {
    return hostsModel.deleteOne({_id: id})
}
const updateUser = (id, updatedUser) => {
    return hostsModel.updateOne(
        {_id: id},
        {$set: updatedUser}
    )
}

const updateUserInfo = (email, updatedUser) => {
    return hostsModel.updateOne(
        {email: email},
        {$set: updatedUser}
    )
}

const updateFollowing = (username, following) => {
    return hostsModel.updateOne(
        {username: username},
        {$push: {followers: following}}
    )
}

// const updateHostHouse = (email, newhouse) => {
//     return hostsModel.up
// }

const hostsDao = {
    findAllUsers, findUserById, findUserByEmail, findUserByUsername,
    findUserByCredentials, createUser, deleteUser,
    updateUser, updateUserInfo, updateFollowing
}

export default hostsDao;