import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const navStyle = { color: "orange" };

  return (
    <nav
      className="jumbotron"
      style={{ paddingBottom: 10, paddingTop: 10, margin: 5 }}
    >
      <NavLink to="/" activeStyle={navStyle} exact>
        HOME
      </NavLink>
      {" | "}
      <NavLink to="/courses" activeStyle={navStyle}>
        Courses
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={navStyle}>
        About
      </NavLink>
    </nav>
  );
}

export default Header;
