const db = require('./db');
const { MovieSchema, MovieReviewSchema } = require('./Schema');

const Movie = db.model('Movie', MovieSchema);
const MovieReview = db.model('MovieReview', MovieReviewSchema);

async function getMovie(movieId) {
  // find movie by id 
  console.log('FROM MODELS', movieId);
  try {
    const result = await Movie.findOne({ id: movieId });
    return result;
  } catch(err) {
    return err;
  }
};

async function editMovie(movieId, section, text) {
  //
  console.log('FROM MODELS', movieId, section, text);
  try {
    const result = await Movie.findOneAndUpdate({ id: movieId }, {
      [section]: text
    }, { new: true });
    return result;
  } catch(err) {
    return err;
  }
}

async function getMovieReview(reviewId) {
  try {
    const result = await MovieReview.findOne({ id: reviewId });
    console.log(result);
    return result;
  } catch(err) {
    return err;
  }
}

module.exports = {
  Movie,
  MovieReview,
  getMovie,
  editMovie,
};