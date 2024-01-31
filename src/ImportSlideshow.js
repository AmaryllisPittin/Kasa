import DataTabs from "../src/data.json";
import "../src/components/Slideshow";

document.addEventListener('DOMContentLoaded', function() {
	const NumberImgContainer = document.querySelector('.img-numbers');
	const imgBanner = document.querySelector(".banner__all-img");
	const arrowLeft = document.querySelector('.arrow_left');
	const arrowRight = document.querySelector('.arrow_right');

    let divCarousel = document.getElementById('slideshow');
    let firstImageCarousel = document.createElement('img');

    if (divCarousel && arrowRight) {
        if (DataTabs && DataTabs.length > 0) {
            const firstImageOrder = DataTabs[0].pictures; 
            firstImageCarousel.src = firstImageOrder;
            firstImageCarousel.alt = "Première image de la bannière";
            divCarousel.appendChild(firstImageCarousel);
        } else {
            console.error("No image data found in data.json");
        }
    } else {
        console.error("Required elements not found");
    }


let currentIndex = 0;

function updateCarouselContent() {
	imgBanner.innerHTML = `<img src=${DataTabs[currentIndex].pictures} alt="DataTab ${currentIndex + 1}" class="banner-img">`;
}

function createNumbers() {
	for (let i=0; i < DataTabs.length; i++) {
		let numberElement = document.createElement("p");
		numberElement.classList.add("number");
		NumberImgContainer.appendChild(numberElement);
	}
}

function updateNumbers() {
	const numberElements = document.querySelectorAll('.number');
	numberElements.forEach((number, index) =>  {
		number.classList.toggle('number_selected', index === currentIndex);
	});
}

function changeDataTab(direction) {
	if (direction === 'right') {
		currentIndex = (currentIndex + 1) % DataTabs.length;
	} else {
		currentIndex = (currentIndex - 1 + DataTabs.length) % DataTabs.length;
	}
	updateCarouselContent();
	updateNumbers();
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
});