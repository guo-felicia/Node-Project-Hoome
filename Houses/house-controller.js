
import houseDao from "./house-dao.js";


//Add async to all the functions in tuits-controller
const findAllResults = async (req, res) => {
    //retrieve the tuits using the tuits-dao
    const results = await houseDao.findAllResults()
    res.json(results);
}

const findResultById = async (req, res) => {
    const resultId = req.params['id'];
    const result = await houseDao.findResultById(resultId)
    res.json(result);
}

const createNewHouse = async (req, res) => {
    const newHouse = req.body
    const insertedHouse = await houseDao.createHouse(newHouse)
    res.json(insertedHouse)
}


const houseController = async(app) => {
    app.post('/api/newhouse', createNewHouse);
    app.get('/api/search', findAllResults);
    app.get('/api/search/:id', findResultById);
}

export default houseController;
