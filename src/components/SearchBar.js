import React from "react";

const SearchBar = ({ searchInput, setSearchInput }) => {
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
    </form>
  );
};

export default SearchBar;
