const swiper_brand = new Swiper('.brand-cards__carousel', {
    direction: 'horizontal',
    loop: true,
    speed: 400,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    breakpoints: {
        479: {
            slidesPerView: 2
        },
        767: {
            slidesPerView: 3
        },
        992: {
            slidesPerView: 5
        }
    },
    navigation: {
        prevEl: '.brand-cards__carousel-button-prev',
        nextEl: '.brand-cards__carousel-button-next',
    },
});