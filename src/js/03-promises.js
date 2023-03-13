import Notiflix from 'notiflix';

const delay = document.querySelector('input[name=delay]');
const step = document.querySelector('input[name=step]');
const amount = document.querySelector('input[name=amount]');

const form = document.querySelector('.form');
let timerId = null;

form.addEventListener('submit', e => {
  // deklaracja zmiennych
  let numDelay = Number(delay.value);
  let numPromise = Number(amount.value);
  let numStep = Number(step.value);
  // deklaracja zmiennych

  // utworzenie funkcji
  function createPromise(position, numDelay) {
    timerId = setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${numDelay}ms`
        ); // Fulfill
      } else {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${numDelay}ms`
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
    
      createPromise(position, numDelay);
    
      numDelay += numStep;
  };

  form.reset();
});
