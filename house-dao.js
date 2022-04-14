import houseModel from "./house-model.js";

export const findAllResults = () => houseModel.find();
export const findResultById = (id) => {
    return houseModel.findById(id)
};
// export const createTuit = (tuit) => tuitsModel.create(tuit);
// export const deleteTuit = (tid) => tuitsModel.deleteOne({_id: tid});
// export const updateTuit = (tid, tuit) => tuitsModel.updateOne({_id: tid}, {$set: tuit})

const houseDao = {
    findAllResults, findResultById
}
export default houseDao;

// module.exports = {
//     findAllTuits, createTuit, deleteTuit, updateTuit
// }

