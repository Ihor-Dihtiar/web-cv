// Scroll to page start

const divArrowUp = document.querySelector('.arrow-up');

if (divArrowUp) {
  divArrowUp.addEventListener('click', () => {
    window.scrollTo(pageXOffset, 0);
  });

  window.addEventListener('scroll', () => {
    if (pageYOffset > 300) {
      divArrowUp.classList.remove('hidden');
    } else {
      divArrowUp.classList.add('hidden');
    }
  });
}
