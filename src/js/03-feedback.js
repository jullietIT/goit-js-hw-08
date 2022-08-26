import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name=email]');
const text = document.querySelector('[name=message]');


const TEXT_INPUT = 'feedback-form-state';


form.addEventListener('submit', onSubmit);

showSavedInput();

function onInput(e) {

  let formInput = localStorage.getItem(TEXT_INPUT);
  formInput = formInput ? JSON.parse(formInput) : {};
  formInput[e.target.name] = e.target.value;


  localStorage.setItem(TEXT_INPUT, JSON.stringify(formInput));
}


function onSubmit(e) {
  const save = localStorage.getItem(TEXT_INPUT);
  e.preventDefault();
  console.log(JSON.parse(save));
  localStorage.removeItem(TEXT_INPUT);
  e.target.reset();
}


function showSavedInput() {
  let formInput = localStorage.getItem(TEXT_INPUT);
  console.log('Function show', formInput);

  if (formInput) {
    formInput = JSON.parse(formInput);


    Object.entries(formInput).forEach(([name, value]) => {
   
      formInput[name] = value;
     
    });

    formInput.message ? (text.value = formInput.message) : '';
    formInput.email ? (email.value = formInput.email) : '';

  }
}



form.addEventListener('input', throttle(onInput, 500));