import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useScrollDirection } from "../hooks/useScrollDirection";

const Header = () => {
  const scrollDirection = useScrollDirection();
  return (
    <header
      className={`header ${scrollDirection === "down" ? "hide" : "show"}`}
    >
      <Link
        style={{ textDecoration: "none", marginLeft: 100, marginRight: 100 }}
        to="/"
      >
        <h1 className="header_h1">Movie Flicker</h1>
      </Link>
      <p className="header_p">Search. Discover. Immerse.</p>
      <SearchBar />
    </header>
  );
};

export default Header;
