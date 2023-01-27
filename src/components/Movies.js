import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchMovies } from "../Utils/fetchMovies";

const Movies = () => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMovies().then(movies => {
      setMovieList(movies);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p className="loadingMovies">Loading movies...</p>;
  }

  return (
    <div className="moviesContainer">
      {movieList.map(movie => {
        return (
          <Link
            style={{ textDecoration: "none" }}
            to={`/movies/${movie.id}`}
            key={movie.id}
          >
            <div className="movie__div">
              <img
                style={{ height: 300, width: 200, marginBottom: 20 }}
                src={movie.imgUrl}
                alt="Movie poster"
              />
              <h3>{movie.title}</h3>
              <p>Directed by: {movie.director}</p>
              <p>likes: {movie.likes}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Movies;
