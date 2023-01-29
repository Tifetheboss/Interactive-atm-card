const cardNumber = document.getElementById('card-number');
const cardOwner = document.getElementById('card-owner');

const cardMonth= document.querySelector('.card-month');
const cardYear= document.querySelector('.card-year');

const cvc = document.getElementById('cvcNumber');

const cardHolderName = document.getElementById('Name');
const cardNumberInput = document.getElementById('Card-Number');


const month = document.getElementById('MM');


const year = document.getElementById('YY');

const Cvc = document.getElementById('cvc');

const Confirm = document.querySelector('#con');
const Continue = document.querySelector('#cont');


const completed = document.querySelector('.right2');
const form = document.querySelector('.right');



function getCardOwner(e){
    cardOwner.innerText = e.target.value;
}

function getCardNumber(e){
    cardNumber.innerText = format(e.target.value);
}

function getMonth(e){
      cardMonth.innerText = e.target.value;
}

function getYear(e){
    cardYear.innerText = e.target.value;
}

function getCvc(e){
    cvc.innerText = e.target.value;
}

function format(s){
    return s.toString().replace(/\d{4}(?=.)/g, '$&');
}

function handleSubmit(e){
    e.preventDefault();
    if (!cardHolderName.value){
        cardHolderName.classList.add('error');
        cardHolderName.parentElement.classList.add('error_message');
    }else{
        cardHolderName.classList.remove('error');
        cardHolderName.parentElement.classList.remove('error_message');
    }
    if (!cardNumberInput.value){
        cardNumberInput.classList.add('error');
        cardNumberInput.parentElement.classList.add('error_message');
    }else{
        cardNumberInput.classList.remove('error');
        cardNumberInput.parentElement.classList.remove('error_message');
    }
    if (!month.value){
        month.classList.add('error');
        month.parentElement.classList.add('error_message');
    }else{
        month.classList.remove('error');
        month.parentElement.classList.remove('error_message');
}
    if (!year.value){
        year.classList.add('error');
        year.parentElement.classList.add('error_message');
    }else{
        year.classList.remove('error');
        year.parentElement.classList.remove('error_message');
    }
    if (!Cvc.value){
        Cvc.classList.add('error');
        Cvc.parentElement.classList.add('error_message');
    }else{
        Cvc.classList.remove('error');
        Cvc.parentElement.classList.remove('error_message');
    }

    if (cardHolderName.value && cardNumberInput.value && month.value && year.value && Cvc.value) {
        completed.classList.remove('hidden');
        form.classList.add('hidden')
      }
      
}

cardHolderName.addEventListener("keyup", getCardOwner);
cardNumberInput.addEventListener("keyup", getCardNumber);
month.addEventListener("keyup", getMonth);
year.addEventListener("keyup", getYear);
Cvc.addEventListener("keyup", getCvc);
Confirm.addEventListener("click", handleSubmit);