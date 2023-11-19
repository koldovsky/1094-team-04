document.addEventListener("partialsLoaded", () => {

    // ==== Burger menu ====
    const body = document.querySelector('body');
    const burgerBtn = document.querySelector('.header__burger-btn');
    const menu = document.querySelector('.header__menu');
    const menuItems = document.querySelectorAll('.menu__item');

    if (burgerBtn) {
        const toggleActiveClasses = () => {
            burgerBtn.classList.toggle('_active');
            menu.classList.toggle('_active');
            body.classList.toggle('fixed');
        };

        const handleBurgerClick = () => {
            toggleActiveClasses();
        };

        burgerBtn.addEventListener('click', handleBurgerClick);
    }

    for (const menuItem of menuItems) {
        menuItem.addEventListener('click', () => {
            burgerBtn.classList.remove('_active');
            menu.classList.remove('_active');
            body.classList.remove('fixed');
        })
    }

    // ==== Initializing Swiper carousel ====
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
});

