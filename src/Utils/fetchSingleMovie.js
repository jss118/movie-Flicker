export const fetchSingleMovie = async id => {
  const res = await fetch("http://localhost:3000/movies");
  const movies = await res.json();
  const singleMovie = movies.filter(movie => movie.id === Number(id));
  return singleMovie[0];
};
