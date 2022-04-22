import ReviewsModel from "./reviews-model.js";

const findReviews = () => ReviewsModel.find();

const reviewsDao = {
    findReviews
}

export default reviewsDao;