import React from "react";
import styles from "../../static/styles/styles.css";

const MovieEntry = props => {
  return (
    <div className={styles.entry}>
      <a className={styles.entrytitle} href="">
        {props.movie.title}
      </a>
      <a className={styles.entryyear}>{props.movie.year}</a>
      {/* Add url link when clicking in image. Ex: href={props.movie.url} */}
      <img src={props.movie.poster} className={styles.entryimage} />
    </div>
  );
};

export default MovieEntry;
