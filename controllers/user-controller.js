import usersDao from "../database/users/users-dao.js";

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
    console.log('server signup been called, with body:')
    const user = req.body
    console.log(user)
    const existed = await usersDao.findUserByEmail(user.email)
    if (existed) {
        console.log('user already existed, which is')
        console.log(existed)
        res.sendStatus(403)
    }
    else {
        console.log('signup success')
        const newUser = await usersDao.createUser(user)
        req.session['currentUser'] = newUser;
        console.log('sign in create a new user')
        console.log(newUser)
        res.json(newUser)
    }
}

const signin = async (req, res) => {
    const existingUser = await usersDao.findUserByCredentials(req.body.email, req.body.password)
    if(existingUser) {
        req.session['currentUser'] = existingUser;
        console.log(`sign in set the current user as ${req.session['currentUser']}`)
        return res.sendStatus(200)
    }
    else {
        return res.sendStatus(503)
    }
}

const profile = async (req, res) => {
    console.log('in profile')
    const currentUser = req.session['currentUser']
    console.log('set current user successfully')
    console.log(`current user is ${currentUser}`)
    if(currentUser) {
        res.json(currentUser)
    }
    else {
        res.sendStatus(403)
    }
}

const logout = async (req, res) => {

}

const userController = (app) => {
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
    app.put('/api/users/:id', updateUser)
}

export default userController;

