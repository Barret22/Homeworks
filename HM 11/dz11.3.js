
 const images =[`https://images.pexels.com/photos/36846/bald-eagle-adler-bird-of-prey-raptor.jpg?auto=compress&cs=tinysrgb&w=600`,
    `https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=600`,
    `https://images.pexels.com/photos/236599/pexels-photo-236599.jpeg?auto=compress&cs=tinysrgb&w=600`,
    `https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=600`,
    `https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    `https://images.pexels.com/photos/2220336/pexels-photo-2220336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    `https://images.pexels.com/photos/36846/bald-eagle-adler-bird-of-prey-raptor.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    `https://images.pexels.com/photos/1431465/pexels-photo-1431465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    `https://images.pexels.com/photos/67552/giraffe-tall-mammal-africa-67552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    `https://images.pexels.com/photos/65894/peacock-pen-alluring-yet-lure-65894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
 ];

const randomIndex = Math.floor(Math.random() * images.length);
const randomImage = images[randomIndex];
const imgElement = document.getElementById('randomImage');
imgElement.src = randomImage;
imgElement.alt = `Random image: ${randomImage}`;