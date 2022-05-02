import usersDao from "../database/users/users-dao.js";
import hostsDao from "../database/hosts/hosts-dao.js";

const findAllUsers = async (req, res) => {
    const users = await usersDao.findAllUsers()
    res.json(users)
}
const findUserById = async (req, res) => {
    const userId = req.params['id']
    const user = await usersDao.findUserById(userId)
    res.json(user)
}
const findUserByEmail = async (req, res) => {
    const email = req.params.email
    const user = await usersDao.findUserByEmail(email)
    res.json(user)
}

const findUserByUsername = async (req, res) => {
    const username = req.params.id
    const user = await usersDao.findUserByUsername(username)
    if (user) {
        res.json(user)
    }
    else {
        const host = await hostsDao.findUserByUsername(username)
        res.json(host)
    }
}

const findUserByCredentials = async (req, res) => {
    const crendentials = req.body
    const email = crendentials.email
    const password = crendentials.password
    const user = await usersDao.findUserByCredentials(email, password)
    if(user) {
        res.sendStatus(200)
    } else {
        res.sendStatus(403)
    }
}
const createUser = async (req, res) => {
    const newUser = req.body
    const insertedUser = await usersDao.createUser(newUser)
    res.json(insertedUser)
}
const deleteUser = async (req, res) => {
    const userId = req.params.id
    const status = await usersDao.deleteUser(userId)
    res.json(status)
}
const updateUser = async (req, res) => {
    const userId = req.params.id
    const updatedUser = req.body
    const status = await usersDao.updateUser(
        userId,
        updatedUser
    )
    res.json(status)
}

// return a 403 if user already exist
// return a json of the new created user if the user been create successfully
const signup = async (req, res) => {
    const credentials = req.body;
    let existingUser;
    if (credentials.role === 'host') {
        existingUser = await hostsDao.findUserByEmail(credentials.email)
        if(existingUser) {
            return res.sendStatus(403)
        } else {
            const newUser = await hostsDao.createUser(credentials)
            req.session['profile'] = newUser
            res.json(newUser)
        }
    }
    else {
        existingUser = await usersDao.findUserByEmail(credentials.email)
        if(existingUser) {
            return res.sendStatus(403)
        } else {
            const newUser = await usersDao.createUser(credentials)
            req.session['profile'] = newUser
            res.json(newUser)
        }
    }
}

const signin = async (req, res) => {
    const credentials = req.body;
    if (credentials.role === 'host') {
        const profile = await hostsDao.findUserByCredentials(credentials.email, credentials.password)
        // const existingUser = await usersDao.findUserByCredentials(req.body.email, req.body.password)
        if (profile) {
            req.session['profile'] = profile;
            res.json(profile);
            return;
        }
        res.sendStatus(403)
    }
    else {
        const profile = await usersDao.findUserByCredentials(credentials.email, credentials.password)
        // const existingUser = await usersDao.findUserByCredentials(req.body.email, req.body.password)
        if (profile) {
            req.session['profile'] = profile;
            res.json(profile);
            return;
        }
        res.sendStatus(403)
    }
}

const profile = async (req, res) => {
    const profile = req.session['profile']
    if(profile) {
        res.json(profile)
    } else {
        res.sendStatus(503)
    }
}

const logout = async (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
}

const updateUserInfo = async (req, res) => {
    const email = req.body.email
    const updatedUser = req.body
    if (updatedUser.identity === 'host') {
        const status = await hostsDao.updateUserInfo(
            email,
            updatedUser
        )
        // TODO: use a try catch to make here safer
        req.session['profile'] = updatedUser
        res.json(status)
    }
    else {
        const status = await usersDao.updateUserInfo(
            email,
            updatedUser
        )
        // TODO: use a try catch to make here safer
        req.session['profile'] = updatedUser
        res.json(status)
    }
}


const addFollowing = async (req, res) => {
    const username = req.params.id
    const newFollowing = req.body.following
    const identity = req.body.identity
    if (identity === 'host') {
        const status = await hostsDao.updateFollowing(
            username,
            newFollowing
        )
        res.json(status)
    }
    else {
        const status = await usersDao.updateFollowing(
            username,
            newFollowing
        )
        res.json(status)
    }


}

// const updateNewHouse = async (req, res) => {
//     const email = req.body.email
//     const newhouse = req.body
//     const status = await hostsDao.updateHostHouse(
//         email,
//         newhouse
//     )
//     const newProfile = usersDao.findUserByEmail(email)
//     req.session['profile'] = newProfile
//     res.json(newProfile)
// }


const userController = (app) => {
    app.get('/api/profile/:id',findUserByUsername)
    app.put('/api/profile/:id', addFollowing)

    // app.put('/api/newhouse', updateNewHouse)

    app.post('/api/signup', signup)
    app.post('/api/signin', signin)
    app.post('/api/profile', profile)
    app.post('/api/logout', logout)

    app.get('/api/users', findAllUsers)
    app.get('/api/users/:id', findUserById)
    app.get('/api/users/email/:email', findUserByEmail)
    app.post('/api/users/credentials', findUserByCredentials)
    app.post('/api/users', createUser)
    app.delete('/api/users/:id', deleteUser)
    app.put('/api/users/:id', updateUser) //currently don't want to use
    app.put('/api/profile', updateUserInfo) //currently want to use
}

export default userController;

