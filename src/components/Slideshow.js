import React from "react";
import logo from "../img/LOGO(1).png";
import { NavLink } from "react-router-dom";

const Slideshow = () => {
  return (
    <div className="navigation">
      <div className="navigation__logo-and-nav">
        <img src={logo} className="kasa-logo" alt="logo de Kasa" />
        <div className="navigation__nav">
          <NavLink to="/">ACCUEIL</NavLink>
          <NavLink to="/a-propos" className="navigation__nav-spacing">
            A PROPOS
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;