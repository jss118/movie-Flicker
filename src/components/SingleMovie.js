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
    <div>
      <img src={singleMovie.imgUrl} alt="movie poster" />
      <h1>{singleMovie.title}</h1>
    </div>
  );
};

export default SingleMovie;
