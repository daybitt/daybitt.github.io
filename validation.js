const fullnameInput = document.querySelector('#FullNameInput');
const ageInput = document.querySelector('#ageInput');
const emailInput = document.querySelector('#emailInput');
const dobInput = document.querySelector('#dobInput');
const progressbar = document.querySelector('#formProgress');

fullnameInput.addEventListener('input', validateInput);
ageInput.addEventListener('input', validateInput);
emailInput.addEventListener('input', validateInput);
dobInput.addEventListener('input', validateInput);

function validateInput(event) {
const inputField = event.target;

if (inputField.value.trim() === '') {
   inputField.classList.add('is-invalid');
   inputField.classList.remove('is-valid');
} else {
   if (inputField.id === 'FullNameInput') {

     const ValidChara = /^[a-zA-Z., ]+$/;

     if (ValidChara.test(inputField.value)) {
       inputField.classList.add('is-valid');
       inputField.classList.remove('is-invalid');
     } else {
       inputField.classList.add('is-invalid');
       inputField.classList.remove('is-valid');
     }
   } else if (inputField.id === 'ageInput') {

     const ValidChara = /^\d+$/;

     if (ValidChara.test(inputField.value)) {
       inputField.classList.add('is-valid');
       inputField.classList.remove('is-invalid');
     } else {
       inputField.classList.add('is-invalid');
       inputField.classList.remove('is-valid');
     }
   } else if (inputField.id === 'emailInput') {

     const ValidChara = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

     if (ValidChara.test(inputField.value)) {
       inputField.classList.add('is-valid');
       inputField.classList.remove('is-invalid');
     } else {
       inputField.classList.add('is-invalid');
       inputField.classList.remove('is-valid');
     }
   } else {
     inputField.classList.add('is-valid');
     inputField.classList.remove('is-invalid');
   }
}
updateProgressBar();
}

function updateProgressBar() {

const validInputs = document.querySelectorAll('.is-valid');
const progressPercentage = validInputs.length / 4 * 100;

progressbar.style.width = progressPercentage + '%';
progressbar.textContent = progressPercentage + '%';
}
