import React from "react";
import axios from "axios";
import styles from "../../static/styles/styles.css";

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
      .get("/movie/review")
      .then(data => {
        console.log("Review fetched: ", data.data[0]);
        let review = data.data[0];
        this.setState({
          review: review
        });
      })
      .catch(error => {
        console.log("Error retrieving review: ", error);
      });
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.reviewbody}>
          <h2 className={styles.header}>User reviews</h2>
          <div className={styles.userreview}>
            <div className={styles.starbar}>
              {this.state.review.review_average}{" "}
              <strong>{this.state.review.review_title}</strong>
            </div>
            <div className={styles.userline}>
              <span className={styles.date}>
                {this.state.review.review_date} |{" "}
              </span>
              <a className={styles.username}>
                by {this.state.review.reviewer} -{" "}
              </a>
              <a className={styles.userreviews}>See all my reviews</a>
            </div>
            <div className={styles.reviewtext}>
              <p>{this.state.review.review}</p>
            </div>
          </div>
          <div className={styles.feedback}>
            {this.state.review.review_likes} of{" "}
            {this.state.review.review_viewers} people found this review helpful.
            Was this review helpful to you?{" "}
            <button className={styles.btnyes} value="yes">
              Yes
            </button>{" "}
            <button className={styles.btnno} value="no">
              No
            </button>{" | "}
            <a className={styles.report}>Report this</a>
          </div>
          <a className={styles.reviewthis}>Review this title | </a>
          <a className={styles.seeall}>
            See all {this.state.reviews_number} user reviews
          </a>
        </div>
      </div>
    );
  }
}

export default Review;
