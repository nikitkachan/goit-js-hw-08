import throttle from 'lodash.throttle';

const formEl = document.querySelector(".feedback-form");
const textarea = document.querySelector(".feedback-form textarea");
const inputEl = document.querySelector(".feedback-form input");

formEl.addEventListener("submit", onFormSubmit);
formEl.addEventListener("input", throttle(onTextInput, 500));

const dataObj = {};
const savedObj = JSON.parse(localStorage.getItem('feedback-form-state'));

savedData();

function onTextInput(evt) {
    dataObj[evt.target.name] = evt.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(dataObj));
};

function onFormSubmit(evt) {
    evt.preventDefault();
     console.log(savedObj);
    localStorage.removeItem('feedback-form-state')
    evt.currentTarget.reset();
};

function savedData() {
    if (savedObj) {
        inputEl.value = savedObj.email;
        textarea.value = savedObj.message;
    };
};