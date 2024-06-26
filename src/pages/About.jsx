import React from "react";
import Navigation from "../components/Navigation";
import BannerAbout from "../components/banners/BannerAbout";
import Footer from "../components/Footer";
import Collapse from "../components/collapses/Collapse";

const ReliabilityText = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";
const RespectText = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
const SecurityText = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";
const ServiceText = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."

const About = () => {
  return (
    <div className="about-page">
        <Navigation />
        <BannerAbout />
        <div className="all-collapse-container">
          <Collapse title="Fiabilité" text={ReliabilityText} id="collapseCheckboxReliability" />
          <Collapse title="Respect" text={RespectText} id="collapseCheckboxRespect" />
          <Collapse title="Service" text={ServiceText} id="collapseCheckboxService" />
          <Collapse title="Sécurité" text={SecurityText} id="collapseCheckboxSecurity" />
      </div>
      <Footer />
    </div>
  );
};

export default About;