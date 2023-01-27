export const fetchMovies = async () => {
  const res = await fetch("http://localhost:3000/movies");
  const movies = await res.json();
  console.log(movies);
  return movies;
};
