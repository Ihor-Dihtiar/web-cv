import './contactForm.js';
import './button-to-up.js';

import '../sass/index.scss';

window.onload = function () {
  const menuBtn = document.querySelector('.btn-burger');
  const menu = document.querySelector('.side-menu');
  const closeMenuBtn = document.querySelector('.menu-close');

  menuBtn.addEventListener('click', () => {
    menu.classList.add('open');
  });

  closeMenuBtn.addEventListener('click', () => {
    menu.classList.remove('open');
  });
};
