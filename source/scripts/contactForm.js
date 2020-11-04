const formInput = document.querySelectorAll('.form__input');
const emailInput = document.querySelector('.form__input_email');
const submitButton = document.querySelector('.form__button');
const contactForm = document.querySelector('.form__body');
const reg = /^\w+@\w+\.\w{2,4}$/i;

if (contactForm) {
  // cancel the event submit for form
  contactForm.addEventListener('submit', preventEvent);

  formInput.forEach((element) => {
    element.oninput = () => {
      element.classList.remove('invalid');
    };

    element.addEventListener('focusout', () => {
      if (!element.value) {
        element.classList.add('invalid');
      }
    });
  });

  if (emailInput) {
    emailInput.addEventListener('focusout', () => {
      const emailValue = emailInput.value;
      emailInput.oninput = () => {
        emailInput.classList.remove('invalid');
      };
      if (!reg.test(emailValue)) {
        emailInput.classList.add('invalid');
      } else {
        emailInput.classList.remove('invalid');
      }
    });
  }
}

// function to cancel the default event
function preventEvent(event) {
  if (event.cancelable) {
    //  если событие может быть отменено и предотвращено
    event.preventDefault(); // отменяем действие события по умолчанию
    console.log('Событие ' + event.type + ' отменено'); //  выводим в консоль информацию о том какое событие было отменено
  } else {
    //  если событие не может быть отменено и предотвращено
    console.warn('Событие ' + event.type + ' не может быть отменено'); //  выводим в консоль информацию о том, что данное событие не может быть отменено
  }
}
