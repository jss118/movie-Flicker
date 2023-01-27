import React from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header_h1">Movie Flicker</h1>
      <p className="header_p">Search. Discover. Immerse.</p>
      <SearchBar />
    </header>
  );
};

export default Header;
