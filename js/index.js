// ==== Burger menu ====
document.addEventListener("partialsLoaded", () => {
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
});

