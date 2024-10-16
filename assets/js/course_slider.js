$('.course-cards-container').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 1000,
    arrows: true,
    responsive: [
        {
            breakpoint: 1450,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            },
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            },
        },
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            },
        }
    ]
  });