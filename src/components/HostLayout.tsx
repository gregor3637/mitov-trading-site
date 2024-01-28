import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

type Props = {};

const HostLayout = (props: Props) => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#c60000",
  };
  return (
    <>
      <nav className="host-nav">
         <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="."
          end
        >
          Dashboardz
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="income"
        >
          Income
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="reviews"
        >
          Reviews
        </NavLink>
        <NavLink
          to="vans"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vansz
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
