import React from "react";
import {NavLink} from "react-router-dom";


const Header = () => {
  return (
    <nav className='navbar navbar-dark navbar-expand-lg bg-dark'>
      <div className="navbar-brand">My App </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            exact
            to="/">Главная
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/about">Информация
          </NavLink>
        </li>
      </ul>
    </nav>
  )
};

export default Header;