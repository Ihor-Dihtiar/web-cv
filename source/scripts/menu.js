// open/close menu
const menuBtn = document.querySelector('.btn-burger');
const menu = document.querySelector('.side-menu');
const closeMenuBtn = document.querySelector('.menu-close');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    menu.classList.add('open');
  });

  closeMenuBtn.addEventListener('click', () => {
    menu.classList.remove('open');
  });
}
