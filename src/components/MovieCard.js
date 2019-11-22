import React from "react";

const MovieCard = ({ film }) => {
  // const film = props.film;
  // const { film } = props;
  // console.log("film", film);
  return (
    <div>
      <h2>Film title: {film.title}</h2>
      <p>{film.description}</p>
      <div>
        <p>Director: {film.director}</p>
        <p>Release Date: {film.release_date}</p>
      </div>
    </div>
  );
};
export default MovieCard;
