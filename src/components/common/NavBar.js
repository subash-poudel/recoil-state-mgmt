import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="list-style">
        <li style={{ textDecoration: "none" }}>
          <Link className="nav-link" to="/">
            Basic
          </Link>
        </li>
        <li>
          <Link to="/todo" className="nav-link">
            Todo
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
