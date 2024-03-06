import React, { useState } from "react";
import DataTabs from "../data.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useParams } from "react-router-dom";

const Slideshow = () => {
    const { id } = useParams();
    const picturesData = DataTabs.find((item) => item.id === id)?.pictures;
    const [currentIndex, setCurrentIndex] = useState(0);

    /*useEffect(() => {
        const arrowLeft = document.querySelector('.arrow-left');
        const arrowRight = document.querySelector('.arrow-right');
        const imgBanner = document.querySelector(".banner__all-img");
        const NumberImgContainer = document.querySelector('.img-numbers');

        createNumbers(NumberImgContainer);
        updateCarouselContent();

        

        function updateCarouselContent() {
          if (picturesData.length > 0) {
            const imgUrl = picturesData[currentIndex % picturesData.length];
            imgBanner.innerHTML = `<img src=${imgUrl} alt="DataTab ${currentIndex + 1}" class="banner-img">`;
        }
        if (picturesData.length === 1) {
            arrowLeft.style.display = 'none';
            arrowRight.style.display = 'none';
        }
        }

        function createNumbers() {
          for (let i = 0; i < picturesData.length; i++) {
              let numberElement = document.createElement("p");
              numberElement.classList.add("number");
              NumberImgContainer.appendChild(numberElement);
          }
      }

      function updateNumbers() {
          const numberElements = document.querySelectorAll('.number');
          numberElements.forEach((number, index) => {
              number.classList.toggle('number_selected', index === currentIndex);
          });
      
          const currentImageNumber = currentIndex + 1;
          const totalImages = picturesData.length;
          NumberImgContainer.textContent = `${currentImageNumber}/${totalImages}`;
      }

        function changeDataTab(direction) {
          if (direction === 'right') {
            setCurrentIndex((currentIndex + 1) % picturesData.length);
        } else {
            setCurrentIndex((currentIndex - 1 + picturesData.length) % picturesData.length);
        }
        }

        updateCarouselContent();
        createNumbers();
        updateNumbers();

        arrowRight.addEventListener('click', () => {
            changeDataTab('right');
        });

        arrowLeft.addEventListener('click', () => {
            changeDataTab('left');
        });

        return () => {
            arrowRight.removeEventListener('click', changeDataTab);
            arrowLeft.removeEventListener('click', changeDataTab);
        };
    }, [currentIndex, picturesData]);*/

    function changeDataTab(direction) {
        if (direction === 'right') {
            setCurrentIndex((currentIndex + 1) % picturesData.length);
        } else {
            setCurrentIndex((currentIndex - 1 + picturesData.length) % picturesData.length);
        }
    }

    return (
        <div id="slideshow">
            <button className={`slideshow-arrow arrow-left`}>
                <FontAwesomeIcon icon={faChevronLeft} onClick={() => changeDataTab('left')} />
            </button>
            <button className={`slideshow-arrow arrow-right`} >
                <FontAwesomeIcon icon={faChevronRight} onClick={() => changeDataTab('right')} />
            </button>

            <div className="banner__all-img banner-img">
                {picturesData.length > 0 && <img src={picturesData[currentIndex % picturesData.length]} alt={`DataTab ${currentIndex + 1}`} className="banner-img" />}
            </div>
            <div className="img-numbers">
                {currentIndex + 1} / {picturesData.length}
            </div>
        </div>
    );
};

export default Slideshow;

