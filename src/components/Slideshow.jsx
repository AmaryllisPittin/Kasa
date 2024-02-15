/*import React from "react";
import ImportSlideShow from "../ImportSlideshow";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Slideshow = (pictures) => {
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

export default Slideshow;*/

import React from "react";
import "../data.json";
import { useParams } from "react-router-dom";
import ImportSlideShow from "../ImportSlideshow";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Slideshow = ({ data }) => {
  const { id } = useParams();
  const picturesData = data.find((picturesData) => picturesData.id === id);

  return (
    <div id="slideshow">
      <button className={`slideshow-arrow arrow-left`}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className={`slideshow-arrow arrow-right`}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      
      <div className="banner__all-img banner-img">
      {picturesData && (
        <ImportSlideShow picturesData={picturesData.pictures} />
      )}
      </div>
      <div className="img-numbers">
      </div>
    </div>
  );
};

export default Slideshow;