import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchMovies } from "../Utils/fetchMovies";

const Movies = props => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { searchInput } = props;

  useEffect(() => {
    if (!searchInput) {
      fetchMovies().then(movies => {
        setMovieList(movies);
        setIsLoading(false);
      });
    } else {
      fetchMovies().then(movies => {
        const filteredMovies = movies.filter(movie => {
          return movie.title.toLowerCase().includes(searchInput.toLowerCase());
        });
        setMovieList(filteredMovies);
        setIsLoading(false);
      });
    }
  }, [searchInput]);

  if (isLoading) {
    return <p className="loadingMovies">Loading movies...</p>;
  }

  return (
    <>
      {searchInput ? (
        <p className="filterDescription">{`Movies containing: "${searchInput}"`}</p>
      ) : null}
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
                <h3 className="movie_div-descriptionToCenter">{movie.title}</h3>
                <p className="movie_div-descriptionToCenter">
                  Directed by: {movie.director}
                </p>
                <p className="movie_div-descriptionToCenter">
                  likes: {movie.likes}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Movies;
