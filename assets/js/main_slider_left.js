let slides = document.getElementsByClassName("slider__slide");
let navlinks = document.getElementsByClassName("slider__navlink");
let currentSlide = 0;
let autoplayInterval;

// Function to start autoplay
function startAutoplay() {
    autoplayInterval = setInterval(() => {
        changeSlide(currentSlide + 1);
    }, 5000); // Change slide every 5 seconds
}

// Function to stop autoplay
function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Next and previous buttons
document.getElementById("nav-button--next").addEventListener("click", () => {
    stopAutoplay(); // Stop autoplay on manual change
    changeSlide(currentSlide + 1);
    startAutoplay(); // Restart autoplay after manual change
});
document.getElementById("nav-button--prev").addEventListener("click", () => {
    stopAutoplay(); // Stop autoplay on manual change
    changeSlide(currentSlide - 1);
    startAutoplay(); // Restart autoplay after manual change
});

// Change slide function
function changeSlide(moveTo) {
    if (moveTo >= slides.length) {moveTo = 0;}
    if (moveTo < 0) {moveTo = slides.length - 1;}
    
    slides[currentSlide].classList.toggle("active");
    navlinks[currentSlide].classList.toggle("active");
    slides[moveTo].classList.toggle("active");
    navlinks[moveTo].classList.toggle("active");
    
    currentSlide = moveTo;
}

// Bullet navigation
document.querySelectorAll('.slider__navlink').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        stopAutoplay(); // Stop autoplay when a bullet is clicked
        if (currentSlide !== bulletIndex) {
            changeSlide(bulletIndex);
        }
        startAutoplay(); // Restart autoplay after manual change
    });
});

// Start the autoplay when the page loads
startAutoplay();