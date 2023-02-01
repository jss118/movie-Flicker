import "./App.css";
import Header from "./components/Header";
import Movies from "./components/Movies";
import SingleMovie from "./components/SingleMovie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <BrowserRouter>
      <Header searchInput={searchInput} setSearchInput={setSearchInput} />
      <Routes>
        <Route path="/" element={<Movies searchInput={searchInput} />} />
        <Route path="movies/:id" element={<SingleMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
