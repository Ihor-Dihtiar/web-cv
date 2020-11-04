const divArrowUp = document.querySelector('.arrow-up');

if (divArrowUp) {
  divArrowUp.addEventListener('click', () => {
    window.scrollTo(pageXOffset, 0);
  });

  console.log(
    'document.documentElement.clientHeight = ' +
      document.documentElement.clientHeight
  );
  console.log(
    'document.documentElement.clientWidth = ' +
      document.documentElement.clientWidth
  );

  window.addEventListener('scroll', () => {
    if (pageYOffset > 300) {
      divArrowUp.classList.remove('hidden');
    } else {
      divArrowUp.classList.add('hidden');
    }
  });
}
