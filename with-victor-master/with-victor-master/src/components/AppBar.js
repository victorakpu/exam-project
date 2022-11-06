import React from "react";
import { Link } from "react-router-dom";

const AppBar = () => {
  return (
    <header className="header">
      <nav className="appbar-container">
        <Link className="link" to={`/`}>RichRipple</Link>
        <div className="nav-links">
          <Link className="link" to={`/about`}>About us</Link>
          <Link className="link" to={`/users`}>All Users</Link>
          <Link className="link" to={`/abouttht`}>This is a 404</Link>
        </div>
      </nav>
    </header>
  );
};

export default AppBar;


