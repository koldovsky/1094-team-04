const swiper = new Swiper('.animal-cards__carousel', {
    direction: 'horizontal',
    loop: true,
    speed: 400,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    breakpoints: {
        576: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 4
        }
    },
    navigation: {
        prevEl: '.animal-cards__carousel-btn-prev',
        nextEl: '.animal-cards__carousel-btn-next',
    },
});

