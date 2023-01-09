const imgContainer = document.querySelector('.image-container');
const loader = document.getElementById('loader');
let count = 5;
let photosArray = [];
const APIKey = 'wa4Vrjo2gTY7xOHP5oK8wvKPabFXKdHmsURdQr5r-Cw';

async function getImages() {
	const imageURL = `https://api.unsplash.com/photos/random?client_id=${APIKey}&count=${count}`;
	try {
		const response = await fetch(imageURL);
		photosArray = await response.json();
		displayImages();
	} catch (error) {
		throw error;
	}
}

function displayImages() {
	photosArray.forEach((photo) => {
		let item = document.createElement('a');
		item.setAttribute('href', photo.links.html);
		item.setAttribute('target', '_blank');

		let img = document.createElement('img');
		img.setAttribute('src', photo.urls.regular);
		img.setAttribute('alt', photo.alt_description);
		img.setAttribute('title', photo.alt_description);

		item.appendChild(img);
		imgContainer.appendChild(item);
	});
}

getImages();
