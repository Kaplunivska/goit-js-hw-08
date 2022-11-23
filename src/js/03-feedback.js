
import throttle from 'lodash.throttle';

const FORM_KEY = 'feedback-form-state';
const UPDATE_DELAY = 500;

const refs = {
 form: document.querySelector('.feedback-form'),
 email: document.querySelector('input[name="email"]'),
 message: document.querySelector('textarea [name="message"]'),
};

refs.form.addEventListener('submit', submitHandler);
refs.email.addEventListener('input', throttle(inputHandler, UPDATE_DELAY));
refs.message.addEventListener('input', throttle(inputHandler, UPDATE_DELAY));

checkLocalStorage();

function inputHandler(e) {
  updateLocalStorage(e.target.name, e.target.value);
}

function submitHandler(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.forEach((value, key) => {
        console.log(`${key} = ${value}`);
    });

    form.reset();
    localStorage.removeItem(FORM_KEY);
}

function updateLocalStorage(key, value) {

    if (!data) {
    setDataLocalStorage({ [key]: value });
    return;
    }

    setDataLocalStorage({...data, [key]: value });
}

function setDataLocalStorage(data) {
    localStorage.setItem(FORM_KEY, JSON.stringify(data));
}

function getDataFromLocalStorage() {
return JSON.parse(localStorage.getItem(FORM_KEY));
}

function checkLocalStorage() {

    const data = getDataFromLocalStorage();

    if (!data) return;
    const keys = Object.keys(data);
    
    keys.forEach(key => (refs[key].value = data[key]));
}