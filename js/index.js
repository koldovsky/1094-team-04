// ==== Burger menu ====

document.addEventListener('DOMContentLoaded', function () {
    const burgerBtn = document.querySelector('.header__burger-btn');
    const menu = document.querySelector('.header__menu');

    if (burgerBtn) {
        const toggleActiveClasses = () => {
            burgerBtn.classList.toggle('active');
            menu.classList.toggle('active');
        };

        const handleBurgerClick = () => {
            toggleActiveClasses();
        };

        burgerBtn.addEventListener('click', handleBurgerClick);
    }
})