import questionsDao from "./questions-dao.js";
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
    const newTuit = req.body;
    newTuit.avatar = "/img/avatar/userav.jpeg";
    newTuit.postedBy = {username: "Felicia"};
    newTuit.handle = "feliciagtf";
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    console.log(newTuit);
    const insertedTuit = await questionsDao.create(newTuit);
    //more functions
    
    res.json(insertedTuit);
}


const update = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await questionsDao.update(tuitdIdToUpdate, updatedTuit);
    res.send(status);
}


const deleteQuestion = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await questionsDao.deleteQuestion(tuitdIdToDelete);
    res.send(status);
}


const questionsController = async (app) => {
    app.post('/api/questions', create);
    app.get('/api/questions', findAll);
    app.put('/api/questions/:id', update);
    app.delete('/api/questions/:id', deleteQuestion);
}

export default questionsController;
