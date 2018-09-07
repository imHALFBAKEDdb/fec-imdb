const mongoose = require("mongoose");

let reviewSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  movie_title: String,
  reviewer: String,
  review_title: String,
  review: String,
  review_date: String,
  reviews_number: Number,
  review_viewers: Number,
  review_likes: Number,
  review_average: Number
});

let Review = mongoose.model("Review", reviewSchema);

module.exports.Review = Review;
