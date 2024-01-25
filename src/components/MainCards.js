import React from "react";
import { NavLink } from "react-router-dom";

const MainCards = () => {
  return (
    <main className="card-container">
      <NavLink to="/Appartement-cosy">
        <article className="card card-1">
          <h2 className="card__h2">Appartement cosy</h2>
        </article>
      </NavLink>
      <NavLink to="/Magnifique-appartement-proche-Canal-Saint-Martin">
        <article className="card card-2">
          <h2 className="card__h2">Magnifique appartement proche du Canal Saint Martin</h2>
        </article>
      </NavLink>
      <NavLink to="/Studio-de-charme-Buttes-Chaumont">
        <article className="card card-3">
          <h2 className="card__h2">Studio de charme - Buttes Chaumont</h2>
        </article>
      </NavLink>
      <NavLink to="/Nid-douillet-au-coeur-du-11ème">
        <article className="card card-4">
          <h2 className="card__h2">Nid douillet au coeur du 11ème</h2>
        </article>
      </NavLink>
      <NavLink to="/Appartement-de-standing-10e">
        <article className="card card-5">
          <h2 className="card__h2">Appartement de Standing - 10e</h2>
        </article>
      </NavLink>
      <NavLink to="/Studio-d'artiste">
        <article className="card card-6">
          <h2 className="card__h2">Studio d'artiste</h2>
        </article>
      </NavLink>
    </main>
    )
}

export default MainCards;