import mongoose from 'mongoose';
import houseSchema from "./house-schema.js";

const houseModel = mongoose
    .model('HouseModel', houseSchema);
export default houseModel;