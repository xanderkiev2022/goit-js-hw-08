import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const formEmail = document.querySelector('input[name="email"]');
const formTextarea = document.querySelector('textarea[name="message"]');
const dataset = {};

onFormFilled();
formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

function dataAssign() {
  dataset.email = formEmail.value;
  dataset.message = formTextarea.value;
}

function onFormInput(event) {
  dataAssign();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataset));
}

function onFormFilled() {
  const reStringedEl = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (reStringedEl) {
    formEmail.value = reStringedEl.email;
    formTextarea.value = reStringedEl.message;
  }
}

function onFormSubmit(event) {
  dataAssign();
  console.log(dataset);
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

// Виконуй це завдання у файлах 03-feedback.html і 03-feedback.js. Розбий його на декілька підзавдань:

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message,
// у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.