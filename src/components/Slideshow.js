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
        {/* Content for image numbers */}
      </div>
    </div>
  );
};

export default Slideshow;