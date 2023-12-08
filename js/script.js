let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// Get the elements for the dropdown menu
const dropdownContainer = document.querySelector('.dropdown-container');
const dropdownMenu = document.querySelector('.dropdown');

// Show the dropdown menu on hover
dropdownContainer.addEventListener('mouseenter', () => {
  dropdownMenu.style.display = 'block';
});

// Hide the dropdown menu when the mouse leaves the container
dropdownContainer.addEventListener('mouseleave', () => {
  dropdownMenu.style.display = 'none';
});
let currentSlide = 1;

function showSlide(slideNumber) {
    const slides = document.querySelectorAll('.slide');
    const controls = document.querySelectorAll('.controls a');
    
    if (slideNumber === currentSlide) return;
    
    slides[currentSlide - 1].style.transform = 'translateX(-100%)';
    slides[slideNumber - 1].style.transform = 'translateX(0)';
    
    controls[currentSlide - 1].classList.remove('active');
    controls[slideNumber - 1].classList.add('active');
    
    currentSlide = slideNumber;
}
