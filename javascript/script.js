let currentSlideIndex = 0;

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
}

function slideChange(n) {
  currentSlideIndex = currentSlideIndex + n;
  slideShow(currentSlideIndex);
}

function currentSlide(i) {
  slideShow((currentSlideIndex = 1));
}

slideShow();
