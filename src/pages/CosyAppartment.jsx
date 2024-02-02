import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Slideshow from "../components/Slideshow";
import dataTab from "../data.json";
import CollapseEquipment from "../components/collapses/CollapseEquipment";
import CollapseDescription from "../components/collapses/CollapseDescription";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faStar);

const CosyAppartment = () => {
  const item = dataTab.find(item => item.id === "c67ab8a7");
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
                  <div className="logement-tag first-tag">{item.tags[0]}</div>
                  <div className="logement-tag">{item.tags[1]}</div>
                </div>
              </div>
                <div className="profile-and-stars-container">
                  <div className="profile"> 
                    {item.host.name}
                    <img src={item.host.picture} alt="Image de l'hôte" className="profile__img" />
                  </div>
                  <div className="rating">
                  <FontAwesomeIcon icon={['fas', 'star']} />
                  <FontAwesomeIcon icon={['fas', 'star']} />
                  <FontAwesomeIcon icon={['fas', 'star']} />
                  <FontAwesomeIcon icon={['fas', 'star']} />
                  <FontAwesomeIcon icon={['fas', 'star']} />
                  </div>
                </div>
                </div>
            )}
            <div className="collapse-logement">
              <CollapseDescription /> 
              <CollapseEquipment />
            </div>
          </div>
    <Footer />
  </div>
  );
};

export default CosyAppartment;