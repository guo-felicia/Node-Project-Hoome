import reviewsDao from "./reviews-dao.js";


//Add async to all the functions in tuits-controller
const findReviews = async (req, res) => {
    //retrieve the tuits using the tuits-dao
    const results = await reviewsDao.findReviews()
    res.json(results);
}


const reviewsController = async (app) => {
    app.get('/api/reviews', findReviews);
}

export default reviewsController;
