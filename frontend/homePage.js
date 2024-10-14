document.addEventListener("DOMContentLoaded", function() {
  const loader = document.getElementById('loader');
  const content = document.querySelector('.homepage-container');

  // Simulate a loading time (e.g., 2 seconds)
  setTimeout(function() {
      loader.classList.add('hidden');
      content.classList.add('show-content');
  }, 2000);
});




const navLinks = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
});




// Scroll functionality for card section
const cardsContainer = document.querySelector('.cards-container');
const scrollLeftButton = document.getElementById('scrollLeft');
const scrollRightButton = document.getElementById('scrollRight');

// Scroll left function
function scrollLeft() {
    cardsContainer.scrollBy({
        left: -200, // Adjust this value to change scroll distance
        behavior: 'smooth' // Smooth scrolling
    });
}

// Scroll right function
function scrollRight() {
    cardsContainer.scrollBy({
        left: 200, // Adjust this value to change scroll distance
        behavior: 'smooth' // Smooth scrolling
    });
}

// Add event listeners
scrollLeftButton.addEventListener('click', scrollLeft);
scrollRightButton.addEventListener('click', scrollRight);
