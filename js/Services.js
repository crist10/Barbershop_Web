let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.querySelectorAll("div#main>div");
  let dots = document.querySelectorAll("#Images div span");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].classList.add("active");
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
