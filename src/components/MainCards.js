import React from "react";
import { NavLink } from "react-router-dom";

const MainCards = () => {
  return (
    <main className="card-container">
      <NavLink to="#">
        <article className="card card-1">
          <h2 className="card__h2">Titre de la location</h2>
        </article>
      </NavLink>
        <article className="card card-2">
          <h2 className="card__h2">Titre de la location</h2>
        </article>
        <article className="card card-3">
          <h2 className="card__h2">Titre de la location</h2>
        </article>
        <article className="card card-4">
          <h2 className="card__h2">Titre de la location</h2>
        </article>
        <article className="card card-5">
          <h2 className="card__h2">Titre de la location</h2>
        </article>
        <article className="card card-6">
          <h2 className="card__h2">Titre de la location</h2>
        </article>
    </main>
    )
}

export default MainCards;