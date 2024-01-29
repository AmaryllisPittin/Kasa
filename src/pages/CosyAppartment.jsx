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
        <Slideshow />
        {item && (
          <div className="logement-page-presentation">
            <h1 className="logement-page-presentation__h1">{item.title}</h1>
            <div>{item.host.name}</div>
            <div>{item.host.picture}</div>
            <div>{item.tags}</div>
            <div>{item.rating}</div>
            <p>{item.location}</p>
          </div>
            )}
            <CollapseDescription />
            <CollapseEquipment />
            <Footer />
    </div>
  );
};

export default CosyAppartment;