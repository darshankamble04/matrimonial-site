import React, { useEffect, useState } from 'react'
import Header from '../../common/header/Header';
// import './css/login.css'
function Login() {
useEffect(() => {
 
}, [])
const [isValid, setIsValid] = useState(true)
const [isValidS, setIsValidS] = useState(true)
const emailInput = document.getElementById("email-input");
const invalidMsg = document.getElementById("invalid-toast");
const successMsg = document.getElementById("success-toast");

// This fuction is for checking email correct format
function validateEmail(emailValue) {
  let value = /\S+@\S+\.\S+/;
  return value.test(emailValue);
}

const handleSubmit=(e)=> {
  e.preventDefault();
  // setTimeout(() => e.submit(), 2000);

  console.log(isValid)
  if (validateEmail(emailInput.value)) {
    setIsValidS(true);
    console.log(isValid)
  } else {
    setIsValid(false);
    console.log(isValid)
  }
  console.log(isValid)
};

const handleInvalid=(e)=> {
  // let inputValue = e.target;
  // console.log(inputValue.validity.valid);
  // if (inputValue.validity.typeMismatch || inputValue.validity.valueMissing) {
  //   // inputValue.setCustomValidity(" ");
  //   // invalidMsg.classList.add("active");
  //   // successMsg.classList.remove("active");
  //   // this.classList.add("invalid");
  // } else {
  //   // invalidMsg.classList.remove("active");
  //   // successMsg.classList.add("active");
  //   // this.classList.remove("invalid");
  // }
};

const handleInput= ()=> {
  // invalidMsg.classList.remove("active");
  // this.classList.remove("invalid");
};

// disable the enter key of your Keyboard, form submit only using Button
document.addEventListener("keypress", function (e) {
  if (e.keyCode === 13 || e.which === 13) {
    e.preventDefault();
  }
});
  
  return (
    <div>
      <form onSubmit={(e)=>{handleSubmit(e)}} class="form">
        <div class="input-container">
          <input onInput={handleInput} onInvalid={(e)=>{handleInvalid(e)}} type="email" name="" placeholder=" " class={`input-field ${isValid?"":"invalid"}`} id="email-input" autocomplete="off" required/>
          <label for="email-input">Email Address</label>
          <i id="email-icon" class="fa-regular fa-envelope"></i>

          <span class={`toast-msg ${isValid?"":"active"}`}  id="invalid-toast">
            <i class="fa-solid fa-circle-exclamation"></i>
            <p>Please enter the correct email format!</p>
          </span>

          <span class={`toast-msg success ${isValidS?"":"active"}`} id="success-toast">
            <i class="fa-solid fa-check"></i>
            <p>Great! your email successfuly submitted.</p>
          </span>

        </div>
        <button class="submit-btn">submit</button>
      </form>
    </div>
  )
}

export default Login