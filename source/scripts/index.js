import './contactForm.js';

import '../sass/index.scss';

window.onload = function () {
  const menuBtn = document.querySelector('.btn-burger');
  const menuBtnIcon = document.querySelector('.burger-icon');
  const menu = document.querySelector('.side-menu');

  menuBtn.addEventListener('click', () => {
    menuBtnIcon.classList.toggle('open');
    menu.classList.toggle('open');
  });
};
