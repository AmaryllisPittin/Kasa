import DataTabs from "../src/data.json";
import "../src/components/Slideshow";

document.addEventListener('DOMContentLoaded', function() {
	const NumberImgContainer = document.querySelector('.img-numbers');
	const imgBanner = document.querySelector(".banner__all-img");
	const arrowLeft = document.querySelector('.arrow-left');
	const arrowRight = document.querySelector('.arrow-right');

    let divCarousel = document.querySelector('banner-img');
    let firstImageCarousel = document.createElement('img');

    if (divCarousel && arrowRight) {
        if (DataTabs && DataTabs.length > 0) {
            const firstImageOrder = DataTabs[0].pictures; 
            firstImageCarousel.src = firstImageOrder;
            firstImageCarousel.alt = "Première image de la bannière";
            divCarousel.appendChild(firstImageCarousel);
			console.log(firstImageCarousel)
        } else {
            console.error("No image data found in data.json");
        }
    } else {
        console.error("Required elements not found");
    }

	/***IMPORT DU TABLEAU D'IMAGES */
		function getImagesById(itemId) {
			const item = DataTabs.find(element => element.id === itemId);
	  
			if (item) {
		  	return item.pictures;
			} else {
		  	console.error(`Aucun élément trouvé avec l'ID ${itemId}`);
		  	return []; 
			}
	  	}
	  
	  	const itemId = "c67ab8a7"; 
	  	const images = getImagesById(itemId);
	  	divCarousel.appendChild(images)


let currentIndex = 0;

function updateCarouselContent() {
	imgBanner.innerHTML = `<img src=${DataTabs[currentIndex].pictures[0]} alt="DataTab ${currentIndex + 1}" class="banner-img">`;
}
console.log('les images sont ajoutées')

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
