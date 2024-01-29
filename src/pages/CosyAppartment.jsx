import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Slideshow from "../components/Slideshow";
import dataTab from "../data.json"

const CosyAppartment = () => {
  const item = dataTab.find(item => item.id === "c67ab8a7");
  return (
    <div id="0">
        <Navigation />
        {item && (
          <div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            
          </div>
            )}
        <Slideshow />
        <Footer />
    </div>
  );
};

export default CosyAppartment;