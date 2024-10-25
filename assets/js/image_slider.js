const imageGallery = document.querySelector(".image-gallery");
const imageSwiperSlides = document.querySelectorAll(".image-swiper-slide");

var imageSwiper = new Swiper(".image-swiper", {
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
    const swiperTranslate = imageSwiper.getTranslate();
    imageSwiper.setTranslate(swiperTranslate);
    imageSwiper.autoplay.stop();
}

function startAutoplay() {
    imageSwiper.slideTo(imageSwiper.activeIndex, 1000, false);
    imageSwiper.autoplay.start();
}

imageGallery.addEventListener("mouseenter", () => stopAutoplay());
imageGallery.addEventListener("mouseleave", () => startAutoplay());

imageSwiperSlides.forEach((imageSwiperSlide) => {
    imageSwiperSlide.addEventListener("click", () => {
        const popopOverlay = document.querySelector(".popup-overlay");
        popopOverlay.style.display = "block";
        const closeBtn = document.querySelector(".close");
        closeBtn.addEventListener("click", () => {
            popopOverlay.style.display = "none";
        });
    });
})

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