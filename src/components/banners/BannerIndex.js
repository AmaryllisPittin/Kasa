import React from "react";
import banner from "../../img/Image source 1.png";

const BannerIndex = () => {
  return (
    <div className="header-banner">
        <img src={banner} className="header-banner__img" alt="bannière paysage Kasa"/>
        <h1 className="header-banner__title">Chez vous, partout et ailleurs</h1>
    </div>
    )
}

export default BannerIndex;