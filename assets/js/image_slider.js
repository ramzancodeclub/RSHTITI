const imageGallery = document.querySelector(".image-gallery");
const likeBtns = document.querySelectorAll(".like-btn");

var swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    slidesPerView: "auto",
    loop: true,
    speed: 6000,
    freeMode: true,
    // allowTouchMove: false,
    autoplay: {
        delay: 0
    },
});

function stopAutoplay() {
    const swiperTranslate = swiper.getTranslate();
    swiper.setTranslate(swiperTranslate);
    swiper.autoplay.stop();
}

function startAutoplay() {
    swiper.slideTo(swiper.activeIndex, 1000, false);
    swiper.autoplay.start();
}

imageGallery.addEventListener("mouseenter", () => stopAutoplay());
imageGallery.addEventListener("mouseleave", () => startAutoplay());

likeBtns.forEach((likeBtn) => {
    likeBtn.addEventListener("click", () => {
        likeBtn.classList.toggle("active");
        likeBtn.classList.toggle("pulse");
    });
})
const popupOverlay = document.querySelector('.popup-overlay');
const swiperSlide = document.querySelector('.swiper-slide');

swiperSlide.forEach((slide) => {
    slide.addEventListener("click", () => {
        popupOverlay.classList.add('show-overlay');
    });
})

// const popupOverlay = document.querySelector('.popup-overlay');
// popupOverlay.classList.add('show-overlay');
// const popupOverlay = document.querySelector('.popup-overlay');
// popupOverlay.classList.remove('show-overlay');
function openPopup(imageSrc) {
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popup-image');
    const cardContainer = document.querySelector('.card-container');
    

    popupImage.src = imageSrc;
    popup.classList.add('active');
    cardContainer.classList.add('inactive');
}

function closePopup() {
    const popup = document.getElementById('popup');
    const cardContainer = document.querySelector('.card-container');
    

    popup.classList.remove('active');
    cardContainer.classList.remove('inactive');
}