import favoritesModel from "./favorites-model.js";
import questionModel from "../Questions/questions-model.js";


export const findAllFavorites = () => favoritesModel.find();
export const addFavorites = (newFavorite) => {
    const faobject = newFavorite[0]
    let fa = {address: faobject.address, rating: faobject.rating, images: faobject.images,
    name: faobject.name, bathrooms: faobject.bathrooms,
        bedrooms: faobject.bedrooms, beds: faobject.beds, postedBy: faobject.postedBy
    }
    return favoritesModel.create(fa);
}
export const deleteFavorites = (id) => favoritesModel.deleteOne({_id: id});

export const findByUser = (name) => {
    const allq = favoritesModel.find({postedBy: name})
    return allq
}

const favoritesDao = {
    findAllFavorites, addFavorites, deleteFavorites, findByUser
}
export default favoritesDao;

