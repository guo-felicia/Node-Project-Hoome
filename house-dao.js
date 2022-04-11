import houseModel from "./house-model.js";

export const findAllTuits = () => houseModel.find();
// export const createTuit = (tuit) => tuitsModel.create(tuit);
// export const deleteTuit = (tid) => tuitsModel.deleteOne({_id: tid});
// export const updateTuit = (tid, tuit) => tuitsModel.updateOne({_id: tid}, {$set: tuit})

const houseDao = {
    findAllResults: findAllTuits
}
export default houseDao;

// module.exports = {
//     findAllTuits, createTuit, deleteTuit, updateTuit
// }

