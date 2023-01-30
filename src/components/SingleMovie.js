import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleMovie } from "../Utils/fetchSingleMovie";

const SingleMovie = () => {
  const [singleMovie, setSingleMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchSingleMovie(id).then(movie => {
      setSingleMovie(movie);
    });
  }, [id]);

  return (
    <div className="singleMovie_grid">
      <img
        className="singleMovie_img"
        src={singleMovie.imgUrl}
        alt="movie poster"
      />
      <h1 className="singleMovie_h1">{singleMovie.title}</h1>
      <p className="singleMovieDirector">Directed by: {singleMovie.director}</p>
      <p className="singleMovieDescription">{singleMovie.description}</p>
    </div>
  );
};

export default SingleMovie;
