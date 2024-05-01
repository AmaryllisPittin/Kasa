import React from "react";
import { NavLink } from "react-router-dom";

const Body404 = () => {
  return (
    <div className="body-error">
        <h1 className="body-error__404">404</h1>
        <p className="body-error__text">Oups ! La page que vous demandez n'existe pas.</p>
        <NavLink to="/" className="body-error__link">Retourner sur la page d'accueil</NavLink>
    </div>
  );
};

export default Body404;