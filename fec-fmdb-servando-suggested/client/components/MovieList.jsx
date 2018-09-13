import React from "react";
import axios from "axios";
import MovieEntry from "./MovieEntry.jsx";
import styles from "../../static/styles/styles.css";

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.fetchAll = this.fetchAll.bind(this);
  }

  componentDidMount() {
    this.fetchAll();
  }

  fetchAll() {
    axios.get("/movie/suggested").then(data => {
      console.log("Data fetched:", data);
      let suggested = [];
      for (let i = 0; i < 10; i++) {
        suggested.push(data.data[i]);
      }
      this.setState({
        data: suggested
      });
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <h4 className={styles.header}>Suggested movies:</h4>
        <div className={styles.list}>
          {this.state.data.map((movie, i) => {
            return <MovieEntry key={"movie_" + i} movie={movie} />;
          })}
        </div>
      </div>
    );
  }
}

export default MovieList;
