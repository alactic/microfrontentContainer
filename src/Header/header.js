import React from "react";
import { NavLink } from "react-router-dom";

const AppHeader = () => (
  <header>
    <nav>
      <ol className="center-column">
        <li>
          <NavLink to="/">Browse restaurants</NavLink>
        </li>
        <li>
          <NavLink to="/redux">Surprise me</NavLink>
        </li>
        <li>
          <NavLink to="/createreactapp">Create React App</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ol>
    </nav>
  </header>
);

export default AppHeader;
