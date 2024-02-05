import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Slideshow from "../components/Slideshow";
import dataTab from "../data.json";
import CollapseEquipment from "../components/collapses/CollapseEquipment";
import CollapseDescription from "../components/collapses/CollapseDescription";
import StarRating from "../components/StarRating";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

library.add(faStar);

const BigHouse = () => {
  const item = dataTab.find(item => item.id === "7cbb378e");
  return (
    <div id="0">
        <Navigation />
        <div className="main">
          <Slideshow />
          {item && (
            <div className="logement-page-presentation">
              <div className="title-and-location">
                <h1 className="title-and-location__h1">{item.title}</h1>
                <p className="title-and-location__location">{item.location}</p>
                <div className="logement-tags-container">
                  <div className="logement-tag margin-tag">{item.tags[0]}</div>
                  <div className="logement-tag margin-tag">{item.tags[1]}</div>
                  <div className="logement-tag margin-tag">{item.tags[2]}</div>
                </div>
              </div>
                <div className="profile-and-stars-container">
                  <div className="profile"> 
                    {item.host.name}
                    <img src={item.host.picture} alt="Image de l'hôte" className="profile__img" />
                  </div>
                  <div className="rating">
                  <StarRating rating={item.rating} />
                  </div>
                </div>
                </div>
            )}
            <div className="collapse-logement">
              <CollapseDescription description={item && item.description} />
              <CollapseEquipment equipments={item && item.equipments} />
            </div>
          </div>
    <Footer />
  </div>
  );
};

export default BigHouse;