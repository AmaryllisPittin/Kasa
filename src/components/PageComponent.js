import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import dataTab from "../data.json";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Slideshow from "../components/Slideshow";
import CollapseEquipment from "../components/collapses/CollapseEquipment";
import CollapseDescription from "../components/collapses/CollapseDescription";
import StarRating from "../components/StarRating";

 const PageComponent = () => {
  const { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0); // Déclaration de l'état currentIndex
  const [bannerImages, setBannerImages] = useState([]);
  const item = dataTab.find((item) => item.id === id);


  useEffect(() => {
    if (item) {
      setBannerImages(item.pictures || []);
    }
  }, [item]);

  const handleIndexChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <Navigation />
      <div className="main">
        <Slideshow
          parentId={id}
          bannerImages={bannerImages}
          currentIndex={currentIndex}
          onIndexChange={handleIndexChange}
        />
        {item && (
          <div className="logement-page-presentation">
            <div className="title-and-location">
              <h1 className="title-and-location__h1">{item.title}</h1>
              <p className="title-and-location__location">{item.location}</p>
              <div className="logement-tags-container">
                <div className="logement-tag margin-tag">{item.tags[0]}</div>
                <div className="logement-tag">{item.tags[1]}</div>
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

export default PageComponent;