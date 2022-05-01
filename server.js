import express from 'express';
import session from 'express-session';
import cors from 'cors';
import mongoose from "mongoose";
import questionsController from "./Questions/questions-controller.js";
import reviewsController from "./Reviews/reviews-controller.js";
import favoritesController from "./Favorites/favorites-controller.js";
import userController from "./controllers/user-controller.js";
import houseController from "./Houses/house-controller.js";

mongoose.connect(`mongodb+srv://felicia:felicia726@cluster0.uovsx.mongodb.net/Hoome?retryWrites=true&w=majority`);
const app = express();


app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

const sess = {
    secret: 'keyboard cat', // TODO: move this to environment variable
    cookie: {}
}

if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess))

app.get('/', (req, res) => {
    res.send('This is Hoome remote database!')
});



app.use(express.json());
questionsController(app);
reviewsController(app);
favoritesController(app);
userController(app);
houseController(app);
//Heroku
app.listen(process.env.PORT || 4000);