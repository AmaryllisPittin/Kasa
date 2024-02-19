import React, { useEffect, useState } from "react";
import DataTabs from "./data.json";
import { useParams } from "react-router-dom";

const ImportSlideShow = () => {
    const { id } = useParams();
    const picturesData = DataTabs.find((item) => item.id === id)?.pictures;
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        
        const NumberImgContainer = document.querySelector('.img-numbers');
        const imgBanner = document.querySelector(".banner__all-img");
        const arrowLeft = document.querySelector('.arrow-left');
        const arrowRight = document.querySelector('.arrow-right');

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
        
            // Mise à jour de l'affichage du numéro de l'image actuelle
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
        
        createNumbers();
        updateNumbers();

        arrowRight.addEventListener('click', () => {
            changeDataTab('right');
        });

        arrowLeft.addEventListener('click', () => {
            changeDataTab('left');
        });

        createNumbers();
        updateCarouselContent();
        updateNumbers();

        return () => {
            arrowRight.removeEventListener('click', changeDataTab);
            arrowLeft.removeEventListener('click', changeDataTab);
        };
    }, [currentIndex, picturesData]);

    return (
        <div id="slideshow">
            <button className={`slideshow-arrow arrow-left`}>

            </button>
            <button className={`slideshow-arrow arrow-right`}>

            </button>

            <div className="banner__all-img banner-img">

            </div>
            <div className="img-numbers">

            </div>
        </div>
    );
};

export default ImportSlideShow;