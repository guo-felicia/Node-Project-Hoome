import express from 'express';
import cors from 'cors';
import houseController from "./house-controller.js";
import mongoose from "mongoose";

mongoose.connect(`mongodb+srv://feliciagtf:shotwell@cluster0.immtk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority&authSource=admin`);
const app = express();
app.use(cors());

app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')});
app.use(express.json());
houseController(app);
// //local
// // app.listen(4000);
//Heroku
app.listen(process.env.PORT || 4000);