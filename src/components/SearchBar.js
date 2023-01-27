import React, { useState } from "react";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleClick = event => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  const handleChange = event => {
    setSearchInput(event.target.value);
  };

  return (
    <form id="search-bar">
      <label id="search-bar-label" htmlFor="query">
        Search movie:
      </label>
      <input
        type="text"
        id="search-bar-input"
        placeholder="i.e. Jurassic Park"
        onChange={handleChange}
        name="query"
      />
      <button
        onClick={handleClick}
        type="submit"
        value={searchInput}
        id="search-bar-btn"
      >
        <span>&#8250;</span>
      </button>
    </form>
  );
};

export default SearchBar;
