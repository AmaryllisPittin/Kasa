import React from "react";
import Navigation from "../components/Navigation";
import BannerIndex from "../components/banners/BannerIndex";
import MainCards from "../components/MainCards";
import Footer from "../components/Footer";

const Index = () => {
    console.log('Index est bien appelé')
  return (
    <div>
        <Navigation />
        <BannerIndex />
        <MainCards />
        <Footer />
    </div>
  );
};

export default Index;