import React from "react";
import { useState, useEffect } from "react";
import { fetchMovies } from "../Utils/fetchMovies";

const Movies = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetchMovies().then(movies => {
      setMovieList(movies);
    });
  }, []);

  return (
    <div className="moviesContainer">
      {movieList.map((movie, index) => {
        return (
          <div className="movie__div" key={index}>
            <img
              style={{ height: 300, width: 200, marginBottom: 20 }}
              src={movie.imgUrl}
              alt="Movie poster"
            />
            <h2>{movie.title}</h2>
            <p>Directed by: {movie.director}</p>
            <p>likes: {movie.likes}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
