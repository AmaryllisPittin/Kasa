import React, { useState } from "react";
import DataTabs from "../data.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useParams } from "react-router-dom";

const Slideshow = () => {
    const { id } = useParams();
    const picturesData = DataTabs.find((item) => item.id === id)?.pictures;
    const [currentIndex, setCurrentIndex] = useState(0);

    function changeDataTab(direction) {
        if (direction === 'right') {
            setCurrentIndex((currentIndex + 1) % picturesData.length);
        } else {
            setCurrentIndex((currentIndex - 1 + picturesData.length) % picturesData.length);
        }
    }

    return (
        <div id="slideshow">
            {picturesData.length >= 2 && (
                <>
                    <button className={`slideshow-arrow arrow-left`}>
                        <FontAwesomeIcon icon={faChevronLeft} onClick={() => changeDataTab('left')} />
                    </button>
                    <button className={`slideshow-arrow arrow-right`} >
                        <FontAwesomeIcon icon={faChevronRight} onClick={() => changeDataTab('right')} />
                    </button>
                </>
            )}

            {picturesData.length >= 2 && (
                <div className="img-numbers">
                    {currentIndex + 1} / {picturesData.length}
                </div>
            )}

            <div className="banner__all-img banner-img">
                {picturesData.length > 0 && <img src={picturesData[currentIndex % picturesData.length]} alt={`DataTab ${currentIndex + 1}`} className="banner-img" />}
            </div>
        </div>
    );
};

export default Slideshow;


