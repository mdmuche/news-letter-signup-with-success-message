"use strict";

const btn = document.querySelector(".sub-btn");
const btn2 = document.querySelector(".diss-btn");
const modal = document.querySelector(".hidden");
const flex = document.querySelector(".flex-row");
const inputField = document.getElementById("email-address");
const required = document.querySelector(".required");
const mobileImg = document.querySelector(".mobile-img");
const registeredEmail = document.querySelector(".email-registered");

const init = function () {
  modal.classList.add("hide");
};
init();

function validateEmail() {
  const email = inputField.value;
  //   console.log(inputField);
  //   console.log(btn);
  if (
    !inputField.value.match(/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/)
  ) {
    inputField.style.backgroundColor = "rgb(160, 116, 116)";
    inputField.style.border = "1px solid rgb(165, 98, 98)";
    inputField.style.color = "var(--Tomato)";
    btn.disabled = true;
    required.classList.remove("required");
    required.textContent = "valid email required";
    required.style.color = "var(--Tomato)";
    return false;
  } else {
    btn.style.backgroundColor = "hsl(4, 100%, 67%)";
    btn.style.boxShadow = "4px 4px 20px hsl(4, 100%, 67%)";
    inputField.style.backgroundColor = "var(--White)";

    inputField.style.color = "var(--Dark-Slate-Grey)";
    inputField.style.border = "1px solid var(--grey)";
    registeredEmail.textContent = email;
    btn.disabled = false;
    required.classList.add("required");
    return true;
  }
}

const addModal = function () {
  modal.classList.remove("hide");
  flex.classList.add("hide");
  mobileImg.classList.toggle("mobile-img");
};

const removeModal = function () {
  modal.classList.add("hide");
  flex.classList.remove("hide");
  mobileImg.classList.toggle("mobile-img");
};
btn.addEventListener("click", addModal);
btn2.addEventListener("click", removeModal);
