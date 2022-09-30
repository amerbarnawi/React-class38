import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div>
        <h1>FAKE STORE</h1>
      </div>
      <div className="header-links">
        <Link className="home-button" to="/favorites">
          Favorites
        </Link>
        <Link className="home-button" to="/">
          Home page
        </Link>
      </div>
    </div>
  );
}

export default Header;
