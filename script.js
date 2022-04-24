'use strict';

const btnMenu = document.querySelector('.btn__menu');
const menuMobile = [...document.querySelectorAll('.c-dropdown__menu')].at(-1);
const overlay = document.querySelector('.c-overlay');

btnMenu.addEventListener('click', () => {
  btnMenu.classList.toggle('close');
  overlay.classList.toggle('hidden');
  menuMobile.classList.toggle('hidden');
});
