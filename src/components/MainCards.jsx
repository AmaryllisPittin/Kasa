import React from "react";
import { NavLink } from "react-router-dom";
import dataTab from "../data.json";

const MainCards = () => {
  return (
    <main className="card-container">
      {dataTab.map(item => (
        <NavLink key={item.id} to={`/logement/${item.id}`} style={{ backgroundColor: `linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5))` }}>
          <article className={`card card-${item.id}`} style={{ backgroundImage: `url(${item.cover})` }}>
            <h2 className="card__h2">{item.title}</h2>
          </article>
        </NavLink>
      ))}
    </main>
  );
};

export default MainCards;