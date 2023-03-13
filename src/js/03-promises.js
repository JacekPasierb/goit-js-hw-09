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
    const promiseMy = new Promise((resolve, reject) => {
      timerId = setTimeout(() => {
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
                         resolve({ position, numDelay });
        } else {
           reject({ position, numDelay });
        }
      }, numDelay);
    });
    return promiseMy;
  }
  // utworzenie funkcji

  // działanie na submit
  e.preventDefault();
  clearTimeout(timerId);

  for (let i = 0; i < numPromise; i++) {
    let position = i;
    
      createPromise(position, numDelay)
        .then(({ position, numDelay }) => {
          
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${numDelay}ms`
          );
        })
        .catch(({ position, numDelay }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${numDelay}ms`
          );
        });
      numDelay += numStep;
  };

  form.reset();
});
