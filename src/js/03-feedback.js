import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name=email]');
const text = document.querySelector('[name=message]');


const TEXT_INPUT = 'feedback-form-state';
const formInput = {};


form.addEventListener('submit', onSubmit);
showSavedInput();

function onInput(e) {

  formInput[e.target.name] = e.target.value;

  const saveText = JSON.stringify(formInput);
 
  localStorage.setItem(TEXT_INPUT, saveText);
}

function onSubmit(e) {
  const save = localStorage.getItem(TEXT_INPUT);
  e.preventDefault();
  console.log(JSON.parse(save));
  localStorage.removeItem(TEXT_INPUT);
  e.target.reset();
}

function showSavedInput() {
  const save = localStorage.getItem(TEXT_INPUT);

  if (save) {
    const textInsert = JSON.parse(save);
    console.log(textInsert);

    textInsert.message ? (text.value = textInsert.message): (text.value = '');
    textInsert.email ? (email.value = textInsert.email): (email.value = '');


  }
}
form.addEventListener('input', throttle(onInput, 500));