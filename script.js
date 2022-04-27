'use strict';

const btnMenu = document.querySelector('.c-menu__btn');
const menu = document.querySelector('.c-menu');

btnMenu.addEventListener('click', () => {
  btnMenu.classList.toggle('c-menu__btn--close');
  menu.classList.toggle('is-visible');
});
