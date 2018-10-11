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
    axios.get(`/suggested/api/s`).then(data => {
      console.log("Data fetched:", data.data);
      let moviesArray = [];
      for (let i = 0; i < data.data.length; i++) {
        moviesArray.push(data.data[i]);
      }
      console.log("moviesArray", moviesArray);
      this.setState({
        data: moviesArray
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
