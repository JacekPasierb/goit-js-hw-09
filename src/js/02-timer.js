import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector('[data-start]');
let calendar = document.querySelector('#datetime-picker');
const days = document.querySelector('[data-days');
const hours = document.querySelector('[data-hours');
const minutes = document.querySelector('[data-minutes');
const seconds = document.querySelector('[data-seconds');

// stylizacja licznika
const timer = document.querySelector('.timer');
const field = document.querySelectorAll('.field');
const value = document.querySelectorAll('.value');
const label = document.querySelectorAll('.label');

timer.style.display = 'flex';
timer.style.gap = '20px';

field.forEach(field => {
  field.style.display = 'flex';
  field.style.flexDirection = 'column';
});

value.forEach(value => {
  value.style.fontSize = '42px';
});

label.forEach(label => {
  label.style.fontWeight = 'bold';
});
// stylizacja licznika

startBtn.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      startBtn.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
    }

    startBtn.addEventListener('click', () => {
      let timerId = setInterval(() => {
        startBtn.disabled = true;
        let selectedDate = selectedDates[0];
        let actualDate = new Date();
        let ms = selectedDate - actualDate;

        let objectTime = convertMs(ms);

        days.textContent = addLeadingZero(objectTime.days);
        hours.textContent = addLeadingZero(objectTime.hours);
        minutes.textContent = addLeadingZero(objectTime.minutes);
        seconds.textContent = addLeadingZero(objectTime.seconds);
        if (
          objectTime.days == 00 &&
          objectTime.hours == 00 &&
          objectTime.minutes == 00 &&
          objectTime.seconds == 00
        ) {
          clearInterval(timerId);
        }
      }, 1000);
    });
  },
};

flatpickr(calendar, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  const formattedValue = String(value).padStart(2, '0');
  return formattedValue;
}
