import React from "react";
import Navigation from "../components/Navigation";
import BannerIndex from "../components/banners/BannerIndex";
import MainCards from "../components/MainCards";

const Index = () => {
    console.log('Index est bien appelé')
  return (
    <div>
        <Navigation />
        <BannerIndex />
        <MainCards />
    </div>
  );
};

export default Index;