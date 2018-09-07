import React from "react";
import axios from "axios";

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
        console.log(data);
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
      <div>
        <h1>Test message</h1>
      </div>
    );
  }
}

export default Review;
