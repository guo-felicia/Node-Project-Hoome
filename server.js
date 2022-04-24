import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import questionsController from "./Questions/questions-controller.js";
import reviewsController from "./Reviews/reviews-controller.js";
import favoritesController from "./Favorites/favorites-controller.js";

mongoose.connect(`mongodb+srv://felicia:felicia726@cluster0.uovsx.mongodb.net/Hoome?retryWrites=true&w=majority`);
const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('This is Hoome remote database!')
});
app.use(express.json());
questionsController(app);
reviewsController(app);
favoritesController(app);
//Heroku
app.listen(process.env.PORT || 4000);