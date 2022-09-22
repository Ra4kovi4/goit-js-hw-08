import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

form.addEventListener('submit', onSubmitForm);

let formData = {};
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
  formData = {};
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    formData = JSON.parse(savedMessage);
  }
  if (formData.email === undefined) {
    formData.email = '';
  }
  email.value = formData.email;

  if (formData.message === undefined) {
    formData.message = '';
  }
  message.value = formData.message;
}
