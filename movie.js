const images = document.querySelector(".carousel");
const totalSlides = document.querySelectorAll('.carousel img').length;
let index = 0;
function showNextImage() {
   index = (index + 1) % totalSlides;
   images.style.transform = `translateX(-${index * 100}%)`;
   }
setInterval(showNextImage, 3000);
