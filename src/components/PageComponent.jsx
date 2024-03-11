import React from "react";
import { useParams } from "react-router-dom";
import dataTab from "../data.json";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Slideshow from "./Slideshow";
import Collapse from "./collapses/Collapse";
import StarRating from "./StarRating";
import Tags from "./Tags";
import NotFound from "./NotFound"; // Importez le composant NotFound

const PageComponent = () => {
  const { id } = useParams();
  const item = dataTab.find((item) => item.id === id);
  const picturesData = dataTab.find((picturesData) => picturesData.id === id);

  // Vérification si la page existe
  if (!item) {
    // Afficher le composant NotFound si la page n'existe pas
    return <NotFound />;
  }

  return (
    <div>
      <Navigation />
      <div className="main">
        <Slideshow parentId={id} picturesData={picturesData} />
        <div className="logement-page-presentation">
          <div className="title-and-location">
            <h1 className="title-and-location__h1">{item.title}</h1>
            <p className="title-and-location__location">{item.location}</p>
            <Tags />
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
        <div className="collapse-logement">
          <div className="collapse-container">
            <Collapse title="Description" text={item.description} />
          </div>
          <div className="collapse-container">
            <Collapse title="Equipements" equipments={item.equipments} isEquipement={true}/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageComponent;
