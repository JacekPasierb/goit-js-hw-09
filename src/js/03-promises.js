import Notiflix from 'notiflix';

const delay = document.querySelector('input[name=delay]');
const step = document.querySelector('input[name=step]');
const amount = document.querySelector('input[name=amount]');

const form = document.querySelector('.form');
let timerId = null;

form.addEventListener('submit', e => {
  // deklaracja zmiennych
  let numDelay = delay.value;
  let numPromise = amount.value;
  let numStep = step.value;
  // deklaracja zmiennych

  // utworzenie funkcji
  function createPromise(position, delay) {
    timerId = setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        ); // Fulfill
      } else {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        ); // Reject
      }
    }, numDelay);
  }
  // utworzenie funkcji

  // działanie na submit
  e.preventDefault();
  clearTimeout(timerId);

  for (let i = 0; i < numPromise; i++) {
    let position = i;
    if (i == 0) {
      createPromise(position, numDelay);
    } else {
      numDelay = numStep;
      createPromise(position, numDelay);
    }
  }

  form.reset();
});
