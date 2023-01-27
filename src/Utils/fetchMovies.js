export const fetchMovies = async () => {
  const res = await fetch("http://localhost:3000/movies");
  const movies = await res.json();
  return movies;
};
