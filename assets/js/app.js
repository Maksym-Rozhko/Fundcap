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

const footerNavLists = document.querySelectorAll('.footer__list--active');
const idList1 = document.getElementById('list1');
const idList2 = document.getElementById('list2');
const idList3 = document.getElementById('list3');
const idList4 = document.getElementById('list4');

for (let list of footerNavLists) {
    list.addEventListener('click', e => {
        e.preventDefault();
        listName = list.innerText;
        listName === 'Product' ? idList1.classList.toggle('show__list') : false;
        listName === 'Features' ? idList2.classList.toggle('show__list') : false;
        listName === 'Services' ? idList3.classList.toggle('show__list') : false;
        listName === 'About' ? idList4.classList.toggle('show__list') : false;
    });
}

