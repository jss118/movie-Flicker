import "./App.css";
import Header from "./components/Header";
import Movies from "./components/Movies";
import SingleMovie from "./components/SingleMovie";
import Genres from "./components/Genres";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="movies/:id" element={<SingleMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
