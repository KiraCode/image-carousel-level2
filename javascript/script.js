let currentSlideIndex = 0;
let interval;

function slideShow(index) {
  let slides = document.getElementsByClassName("carousel-slide");
  let dots = document.getElementsByClassName("dot");

  if (index > slides.length - 1) {
    currentSlideIndex = 0;
  }

  if (index < 0) {
    currentSlideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[currentSlideIndex].style = "block";

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("dot-active", "");
  }
  dots[currentSlideIndex].className += " dot-active";

  // assigning the current image src to image tag to popup
  const popupImage = document.getElementById("popup-image");
  popupImage.src = slides[currentSlideIndex].src;
}

function slideChange(n) {
  currentSlideIndex = currentSlideIndex + n;
  slideShow(currentSlideIndex);
}

function currentSlide(i) {
  slideShow((currentSlideIndex = 1));
}

function resetInterval(interval) {
  clearInterval(interval);
  interval = setInterval(() => {
    slideChange(1);
  }, 3000);
}

function openPopup() {
  clearInterval(interval); //stop the carousel
  const modal = document.getElementById("imagePopup");
  modal.style.display = "flex";
}

function closePopup() {
  const modal = document.getElementById("imagePopup");
  modal.style.display = "none";
  resetInterval(); //stop the interval
}

slideShow(currentSlideIndex);
resetInterval();
