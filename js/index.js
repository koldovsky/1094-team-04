// ==== Burger menu ====

document.addEventListener('DOMContentLoaded', function () {
    const burgerBtn = document.getElementById('burger-btn');
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

    if (!burgerBtn) {
        console.log("no burgerBtn");
    }
})