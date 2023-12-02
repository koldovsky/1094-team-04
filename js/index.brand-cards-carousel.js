const swiper = new Swiper('.brand-cards__carousel', {
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
        prevEl: '.brand-cards__carousel-button-prev',
        nextEl: '.brand-cards__carousel-button-next',
    },
});