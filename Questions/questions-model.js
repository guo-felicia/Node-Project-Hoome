import mongoose from 'mongoose';
import questionsSchema from "./questions-schema.js";

const questionModel = mongoose
    .model('QuestionModel', questionsSchema);
export default questionModel;