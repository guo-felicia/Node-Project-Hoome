
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


const houseController = async(app) => {
    app.get('/api/search', findAllResults);
    app.get('/api/search/:id', findResultById);
}

export default houseController;
