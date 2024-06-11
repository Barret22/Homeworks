



const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg'];
const randomIndex = Math.floor(Math.random() * images.length);
const randomImage = images[randomIndex];
const imgElement = document.getElementById('randomImage');
imgElement.src = `dz11.3.images/${randomImage}`;
imgElement.alt = `Random image: ${randomImage}`;
