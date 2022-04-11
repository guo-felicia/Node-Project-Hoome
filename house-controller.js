
import houseDao from "./house-dao.js";


//Add async to all the functions in tuits-controller
const findAllResults = async (req, res) => {
    //retrieve the tuits using the tuits-dao
    const results = await houseDao.findAllResults()
    res.json(results);
}


const houseController = async(app) => {
    app.get('/api/results', findAllResults);
}

export default houseController;
