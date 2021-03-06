import questionsDao from "./questions-dao.js";
import usersDao from "../database/users/users-dao.js";
//Remove all usage of the array from the tuits-controller
// and instead import the tuits-dao which will provide
// the functionality of interacting with the tuits collection.

//Add async to all the functions in tuits-controller
const findAll = async (req, res) => {
    //retrieve the tuits using the tuits-dao
    const tuits = await questionsDao.findAll()
    res.json(tuits);
}

const create = async (req, res) => {
    const profile = req.body.profile;
    const newQuestion = req.body.newQuestion;
    newQuestion.avatar = "/img/avatar/userav.jpeg";
    newQuestion.postedBy = {firstName: profile.firstName, username: profile.username};
    newQuestion.likes = 0;
    newQuestion.dislikes = 0;
    const insertedQuestion = await questionsDao.create(newQuestion);
    //more functions
    res.json(insertedQuestion);
}

const deleteQuestion = async (req, res) => {
    const questionIdToDelete = req.params.id;
    const status = await questionsDao.deleteQuestion(questionIdToDelete);
    res.send(status);
}

const update = async (req, res) => {
    const tuitdIdToUpdate = req.params.id;
    const updatedTuit = req.body;
    const status = await questionsDao.update(tuitdIdToUpdate, updatedTuit);
    res.send(status);
}

const findByUser = async (req, res) => {
    const username = req.params.id;
    const firstName = req.params.name;
    const name = {firstName: firstName, username: username}
    const questions = await questionsDao.findByUser(name)
    res.json(questions)
}



const questionsController = async (app) => {
    app.post('/api/questions', create);
    app.get('/api/questions', findAll);
    app.get('/api/questions/:id/:name', findByUser)
    app.put('/api/questions/:id', update);
    app.delete('/api/questions/:id', deleteQuestion);
}

export default questionsController;
