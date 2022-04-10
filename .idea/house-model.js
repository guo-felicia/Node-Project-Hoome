import mongoose from 'mongoose';
import houseSchema from "../house-schema";

const houseModel = mongoose
    .model('HouseModel', houseSchema);
export default houseModel;