import throttle from 'lodash.throttle';

const formEl = document.querySelector(".feedback-form");
const textarea = document.querySelector(".feedback-form textarea");
const inputEl = document.querySelector(".feedback-form input");

formEl.addEventListener("submit", onFormSubmit);
formEl.addEventListener("input", throttle(onTextInput, 500));

const dataObj = {};

function onTextInput(evt) {
    if (evt.target.value === "") {
        
    }
    dataObj[evt.target.name] = evt.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(dataObj));
};

function onFormSubmit(evt) {
    evt.preventDefault();
    if (evt.target[0].value === "" || evt.target[1].value === "") {
        alert("Fill in all the fields!");
    } else {
        console.log(dataObj);
        evt.currentTarget.reset();
        localStorage.removeItem('feedback-form-state');
        delete dataObj.email;
        delete dataObj.message;
    };
};

function savedData() {
    const savedObj = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (savedObj) {
        if (savedObj.email) {
            inputEl.value = savedObj.email;
            dataObj.email = savedObj.email;
    };
    if (savedObj.message) {
        textarea.value = savedObj.message;
        dataObj.message = savedObj.message;
    };

        console.log(inputEl.value);
        console.log(textarea.value);
        console.log(dataObj);
    };
    
    
};

savedData();