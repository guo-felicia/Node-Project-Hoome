
import houseDao from "./house-dao.js";


//Add async to all the functions in tuits-controller
const findAllResults = async (req, res) => {
    //retrieve the tuits using the tuits-dao
    const results = await houseDao.findAllResults()
    res.json(results);
}

const findResultById = async (req, res) => {
    const resultId = req.params.uid;
    const results = await houseDao.findAllResults()
    const result = results.find(u => u._id === resultId);
    res.json(result);
}


const houseController = async(app) => {
    app.get('/api/results', findAllResults);
    app.get('/api/results/:resultId', findResultById);
}

export default houseController;
