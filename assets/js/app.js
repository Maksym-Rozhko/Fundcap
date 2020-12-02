const overflowEffect = document.querySelector('#body');
const burgerMenu = document.querySelector('#burgerToogle');
const navMenu = document.querySelector('.header__nav__inner');

burgerMenu.addEventListener('click', (e) => {
    e.preventDefault();
    navMenu.classList.toggle('header__nav__inner--active');
    overflowEffect.classList.toggle('overflow');
});
