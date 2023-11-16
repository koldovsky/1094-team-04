addEventListener('DOMContentLoaded', (event) => {
    const burgerBtn = document.querySelector('.header__burger-btn');
    const menu = document.querySelector('.header__menu');

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('_active');
        menu.classList.toggle('_active');
        console.log('it works');
    });
});

