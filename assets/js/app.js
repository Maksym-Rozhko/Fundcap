const overflowEffect = document.querySelector('#body');
const burgerMenu = document.querySelector('#burgerToogle');
const navMenu = document.querySelector('.header__nav__inner');
const burgerLineTop = document.querySelector('.line-top');
const burgerLineMiddle = document.querySelector('.line-middle');
const burgerLineBottom = document.querySelector('.line-bottom');

burgerMenu.addEventListener('click', (e) => {
    e.preventDefault();
    navMenu.classList.toggle('header__nav__inner--active');
    overflowEffect.classList.toggle('overflow');
    burgerMenu.classList.toggle('active');
    burgerLineTop.classList.toggle('active');
    burgerLineMiddle.classList.toggle('active');
    burgerLineBottom.classList.toggle('active');
});
