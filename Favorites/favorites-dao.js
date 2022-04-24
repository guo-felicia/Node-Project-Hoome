import favoritesModel from "./favorites-model.js";


export const findAllFavorites = () => favoritesModel.find();
export const addFavorites = (newFavorite) => favoritesModel.create(newFavorite);
export const deleteFavorites = (id) => favoritesModel.deleteOne({_id: id});

const favoritesDao = {
    findAllFavorites, addFavorites, deleteFavorites
}
export default favoritesDao;

