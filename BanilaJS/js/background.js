const images = ["0.jpg","1.jpg","2.jpg","3.jpg"];


const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");

bgimage.id = "allImage";


bgimage.src = `img/${chosenImage}`;




document.body.appendChild(bgimage);
