// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.


// 4.Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.
import throttle from 'lodash.throttle';



const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

const formData = {};



function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('LOCALSTORAGE_KEY', JSON.stringify(formData));
}


//3. При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
function onSubmitForm(e) {
  console.log(JSON.parse(localStorage.getItem('LOCALSTORAGE_KEY')));
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('LOCALSTORAGE_KEY');
}

// 1.Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".

(function dataFromLocalStorage() {
  const dataStorage = JSON.parse(localStorage.getItem('LOCALSTORAGE_KEY'));

  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');

  if (dataStorage) {
    email.value = dataStorage.email;
    message.value = dataStorage.message;
  }
})();



