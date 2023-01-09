const imgContainer = document.querySelector('.image-container');
const loader = document.getElementById('loader');
let count = 1;
let APIArray = [];
const APIKey = 'wa4Vrjo2gTY7xOHP5oK8wvKPabFXKdHmsURdQr5r-Cw';

async function getImages() {
	const imageURL = `https://api.unsplash.com/photos/random?client_id=${APIKey}&${count}`;
	try {
		const response = await fetch(imageURL);
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log(error);
		throw error;
	}
}

getImages();
