import questionModel from "./questions-model.js";


export const findAll = () => questionModel.find();
export const create = (newQuestion) => questionModel.create(newQuestion);
export const deleteQuestion = (id) => questionModel.deleteOne({_id: id});
export const update = (id, question) => questionModel.updateOne({_id: id}, {$set: question})
export const findByUser = (name) => {
    const allq = questionModel.find({postedBy: name})
    return allq
}


const questionsDao = {
    findAll, create, deleteQuestion, update, findByUser
}
export default questionsDao;

