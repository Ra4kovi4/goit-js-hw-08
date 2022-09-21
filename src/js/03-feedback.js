import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

form.addEventListener('submit', onSubmitForm);

const formData = {};
form.addEventListener('input', throttle(onTextareaValue, 500));
populateTextarea();

function onTextareaValue(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    const data = JSON.parse(savedMessage);
    email.value = data.email;
    message.value = data.message;
  }
}
