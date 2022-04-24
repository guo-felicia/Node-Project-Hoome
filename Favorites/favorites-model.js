import mongoose from 'mongoose';
import favoritesSchema from "./favorites-schema.js";

const favoritesModel = mongoose
    .model('favoritesModel', favoritesSchema);
export default favoritesModel;