import questionModel from "./questions-model.js";


export const findAll = () => questionModel.find();
export const create = (newQuestion) => questionModel.create(newQuestion);
export const deleteQuestion = (id) => questionModel.deleteOne({_id: id});
export const update = (id, question) => questionModel.updateOne({_id: id}, {$set: question})

const questionsDao = {
    findAll, create, deleteQuestion, update
}
export default questionsDao;

