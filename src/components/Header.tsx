import React from "react";
import { Link, NavLink } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#ff0000",
  };

  function fakeLogOut() {
    localStorage.removeItem("loggedin");
  }

  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink
          to="host"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        <NavLink
          to="vans"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
        <Link to="login" className="login-link">
          <img src="../assets/images/avatar-icon.png" className="login-icon" />
        </Link>
        <button onClick={fakeLogOut}>X</button>
      </nav>
    </header>
  );
};

export default Header;
