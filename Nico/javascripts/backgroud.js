const images = ["picture1.png", "picture2.png","picture3.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`; 

document.body.appendChild(bgImage);