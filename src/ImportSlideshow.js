import React, { useEffect, useState } from "react";
import DataTabs from "../src/data.json";

const ImportSlideShow = ({parentId}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const filteredDataTabs = DataTabs.filter(item => item.parentId === parentId).slice(0,5);

    useEffect(() => {
        /*const divCarousel = document.querySelector('.banner-img');*/
        const NumberImgContainer = document.querySelector('.img-numbers');
        const imgBanner = document.querySelector(".banner__all-img");
        const arrowLeft = document.querySelector('.arrow-left');
        const arrowRight = document.querySelector('.arrow-right');

        function updateCarouselContent() {
            if (filteredDataTabs.length > 0) {
                const imgUrl = filteredDataTabs[currentIndex % filteredDataTabs.length].pictures[0];
                imgBanner.innerHTML = `<img src=${imgUrl} alt="DataTab ${currentIndex + 1}" class="banner-img">`;
            }
        }

        function createNumbers() {
            for (let i = 0; i < DataTabs.length; i++) {
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
        }

        function changeDataTab(direction) {
            if (direction === 'right') {
                setCurrentIndex((currentIndex + 1) % DataTabs.length);
            } else {
                setCurrentIndex((currentIndex - 1 + DataTabs.length) % DataTabs.length);
            }
        }

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
    }, [currentIndex, filteredDataTabs]);

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


