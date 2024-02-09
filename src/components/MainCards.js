/*import React from "react";
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
      <NavLink to="/Cheap-Studio-18ème">
        <article className="card card-7">
          <h2 className="card__h2">Cheap - Studio 18ème</h2>
        </article>
      </NavLink>
      <NavLink to="/Superbe-appartement-proche-Tour-Eiffel">
        <article className="card card-8">
          <h2 className="card__h2">Superbe appartement proche Tour Eiffel</h2>
        </article>
      </NavLink>
      <NavLink to="/Suite-familiale">
        <article className="card card-9">
          <h2 className="card__h2">Suite Familiale</h2>
        </article>
      </NavLink>
      <NavLink to="/Appartement-moderne-sur-parc">
        <article className="card card-10">
          <h2 className="card__h2">Appartement moderne sur parc</h2>
        </article>
      </NavLink>
      <NavLink to="/Charmant-Studio-Marais">
        <article className="card card-11">
          <h2 className="card__h2">Charmant Studio Marais</h2>
        </article>
      </NavLink>
      <NavLink to="/Studio-fonctionnel-République">
        <article className="card card-12">
          <h2 className="card__h2">Studio fonctionnel République</h2>
        </article>
      </NavLink>
      <NavLink to="/Bungalow-dans-la-forêt">
        <article className="card card-13">
          <h2 className="card__h2">Bungalow dans la forêt</h2>
        </article>
      </NavLink>
      <NavLink to="/Grande-Maison-proche-banlieue">
        <article className="card card-14">
          <h2 className="card__h2">Grande Maison proche banlieue</h2>
        </article>
      </NavLink>
      <NavLink to="/Maison-T5-Le-Vésinet">
        <article className="card card-15">
          <h2 className="card__h2">Maison T5 - Le Vésinet</h2>
        </article>
      </NavLink>
      <NavLink to="/Loft-de-Luxe-à-la-Défense">
        <article className="card card-16">
          <h2 className="card__h2">Loft de Luxe à la Défense</h2>
        </article>
      </NavLink>
      <NavLink to="/Charmant-apt-aux-portes-de-Paris">
        <article className="card card-17">
          <h2 className="card__h2">Charmant apt aux portes de Paris</h2>
        </article>
      </NavLink>
      <NavLink to="/Cheap-Chambre-Paris-20">
        <article className="card card-18">
          <h2 className="card__h2">Cheap - Chambre Paris 20</h2>
        </article>
      </NavLink>
      <NavLink to="/Charmant-studio">
        <article className="card card-19">
          <h2 className="card__h2">Charmant studio</h2>
        </article>
      </NavLink>
      <NavLink to="/Magnifique-appartement-Rivoli">
        <article className="card card-20">
          <h2 className="card__h2">Magnifique appartement Rivoli</h2>
        </article>
      </NavLink>  
    </main>
    )
}

export default MainCards;*/

import React from "react";
import { NavLink } from "react-router-dom";
import dataTab from "../data.json";

const MainCards = () => {
  return (
    <main className="card-container">
      {dataTab.map(item => (
        <NavLink key={item.id} to={`/logement/${item.id}`}>
          <article className={`card card-${item.id}`}>
            <h2 className="card__h2">{item.title}</h2>
          </article>
        </NavLink>
      ))}
    </main>
  );
};

export default MainCards;