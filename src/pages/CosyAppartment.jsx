import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Slideshow from "../components/Slideshow";
import dataTab from "../data.json";
import CollapseEquipment from "../components/collapses/CollapseEquipment";
import CollapseDescription from "../components/collapses/CollapseDescription";

const CosyAppartment = () => {
  const item = dataTab.find(item => item.id === "c67ab8a7");
  return (
    <div id="0">
        <Navigation />
        <div className="main">
          <Slideshow />
          {item && (
            <div className="logement-page-presentation">
              <h1 className="logement-page-presentation__h1">{item.title}</h1>
              <p className="logement-page-presentation__location">{item.location}</p>
              <div className="profile"> {item.host.name}
              <img src={item.host.picture} alt="Image de l'hôte" className="profile__img" />
            </div>
            <div>{item.tags}</div>
            <div>{item.rating}</div>
            </div>
            )}
            <CollapseDescription />
            <CollapseEquipment />
            <Footer />
    </div>
    </div>
  );
};

export default CosyAppartment;