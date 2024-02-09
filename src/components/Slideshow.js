import React from "react";
import ImportSlideShow from "../ImportSlideshow";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Slideshow = () => {
  return (
    <div id="slideshow">
      <button className={`slideshow-arrow arrow-left`}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className={`slideshow-arrow arrow-right`}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      
      <div className="banner__all-img banner-img">
        <ImportSlideShow />
      </div>
      <div className="img-numbers">
      </div>
    </div>
  );
};

export default Slideshow;

/**ESSAI 15h46 */

/* React, { useState } from "react";
import ImportSlideShow from "../../src/ImportSlideshow";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import DataTabs from "../data.json";

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Récupérer l'élément correspondant à l'itemId
  const currentItem = DataTabs.find(item => item.id === itemId);

  // Récupérer les images spécifiques à l'élément actuel
  const pictures = currentItem ? currentItem.pictures : [];

  const totalSlides = pictures.length;

  const handleNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % totalSlides);
  };

  const handlePreviousSlide = () => {
    setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <div id="slideshow">
      <button className={`slideshow-arrow arrow-left`} onClick={handlePreviousSlide}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className={`slideshow-arrow arrow-right`} onClick={handleNextSlide}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      
      <div className="banner__all-img banner-img">
        <ImportSlideShow images={pictures} currentIndex={currentIndex} />
      </div>
      <div className="img-numbers">
      </div>
    </div>
  );
};

export default Slideshow;*/