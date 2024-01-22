import React from "react";
import Navigation from "../components/Navigation";
import BannerAbout from "../components/banners/BannerAbout";
import Footer from "../components/Footer";
import CollapseReliability from "../components/collapses/CollapseReliability";
import CollapseRespect from "../components/collapses/CollapseRespect";
import CollapseService from "../components/collapses/CollapseService";
import CollapseSecurity from "../components/collapses/CollapseSecurity";

const About = () => {
  return (
    <div>
        <Navigation />
        <BannerAbout />
        <CollapseReliability />
        <CollapseRespect />
        <CollapseService />
        <CollapseSecurity />
        <Footer />
    </div>
  );
};

export default About;