import React from "react";
import axios from "axios";
import styles from "./styles/Review.css";

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: {}
    };
    this.fetchReview = this.fetchReview.bind(this);
  }

  componentDidMount() {
    this.fetchReview();
  }

  fetchReview() {
    axios
      .get("/api/review/1")
      .then(results => {
        console.log("Review fetched: ", results);
        const { data } = results;
        this.setState({
          review: data
        });
      })
      .catch(error => {
        console.log("Error retrieving review: ", error);
      });
  }

  render() {
    return (
      <div className={styles.review}>
        <h2 className={styles.header}>User reviews</h2>
        <div className={styles.userreview}>
          <div className={styles.starbar}>
            {this.state.review.review_average}
          </div>
          <div className={styles.userline}>
            <span className={styles.date}>{this.state.review.review_date}</span>
            <a className={styles.username}>{this.state.review.reviewer}</a> -
            <a className={styles.userreviews}>See all my reviews</a>
          </div>
          <div className={styles.reviewbody}>
            <p>{this.state.review.review}</p>
          </div>
        </div>
        <div className={styles.feedback}>
          {this.state.review.review_likes} of {this.state.review.review_viewers}{" "}
          people found this review helpful. Was this review helpful to you?
          <button className={styles.btnyes} value="yes">
            Yes
          </button>
          <button className={styles.btnno} value="no">
            No
          </button>
          <a className={styles.report}>Report this</a>
        </div>
        <a className={styles.reviewthis}>Review this title | </a>
        <a className={styles.seeall}>
          See all {this.state.reviews_number} user reviews
        </a>
      </div>
    );
  }
}

export default Review;
