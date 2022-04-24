import favoritesDao from "./favorites-dao.js";
//Remove all usage of the array from the tuits-controller
// and instead import the tuits-dao which will provide
// the functionality of interacting with the tuits collection.

//Add async to all the functions in tuits-controller
const findAllFavorites = async (req, res) => {
    //retrieve the tuits using the tuits-dao
    const favorites = await favoritesDao.findAllFavorites()
    res.json(favorites);
}

const addFavorites = async (req, res) => {
    const newFavorite = req.body;
    const insertedFavorite = await favoritesDao.addFavorites(newFavorite);
    //more functions
    res.json(insertedFavorite);
}

const deleteFavorites = async (req, res) => {
    const favoriteIdToDelete = req.params.id;
    const status = await favoritesDao.deleteFavorites(favoriteIdToDelete);
    res.send(status);
}


const favoritesController = async (app) => {
    app.post('/api/favorites', addFavorites);
    app.get('/api/favorites', findAllFavorites);
    app.delete('/api/favorites/:id', deleteFavorites);
}

export default favoritesController;
