import React from "react";

const SearchBar = ({ searchInput, setSearchInput }) => {
  const handleChange = event => {
    setSearchInput(event.target.value);
    window.scrollTo(0, 0);
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
