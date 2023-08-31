// Задаем ключевые значения для ввода емаил
const emailInputId = "emailInput";
const emailErrorMessageId = "emailErrorMessage";
const emailErrorMessageText = "Проверьте адрес электронной почты";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let emailValidated = { value: false };

// Задаем ключевые значения для ввода телефона
const phoneInputId = "phoneInput";
const phoneErrorMessageId = "phoneErrorMessage";
const phoneErrorMessageText = "Формат: +9 999 999 99 99";
const phoneRegex = /^\+\d \d{3} \d{3} \d{2} \d{2}$/;
let phoneValidated = { value: false };

// Задаем ключевые значения для ввода инн
const innInputId = "innInput";
const innErrorMessageId = "innErrorMessage";
const innErrorMessageText = "Проверьте ИНН";
const innRegex = /^\d{14}$/;
let innValidated = { value: false };

// Своего рода перечисления для результата валидации
const CORRECT_INPUT = 1;
const INCORRECT_INPUT = 2;
const VOID_INPUT = 3;

const form = document.getElementById("mainForm");

window.onload = function () {
  document.getElementById(emailInputId).addEventListener("blur", validateEmail);
  document
    .getElementById(emailInputId)
    .addEventListener("input", validateEmail);

  document.getElementById(phoneInputId).addEventListener("blur", validatePhone);
  document
    .getElementById(phoneInputId)
    .addEventListener("input", validatePhone);

  document.getElementById(innInputId).addEventListener("blur", validateInn);
  document.getElementById(innInputId).addEventListener("input", validateInn);
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateForm()) {
    submitForm();
  }
});

function validateForm() {
  if (!validateEmail({ type: "submit" })) return false;
  if (!validatePhone({ type: "submit" })) return false;
  if (!validateInn({ type: "submit" })) return false;

  return true;
}
function submitForm() {
  alert("Всё введено верно");
}

function validateEmail(event) {
  return validateField(
    event.type,
    emailRegex,
    emailInputId,
    emailErrorMessageText,
    emailErrorMessageId
  );
}

function validatePhone(event) {
  return validateField(
    event.type,
    phoneRegex,
    phoneInputId,
    phoneErrorMessageText,
    phoneErrorMessageId
  );
}
function validateInn(event) {
  return validateField(
    event.type,
    innRegex,
    innInputId,
    innErrorMessageText,
    innErrorMessageId
  );
}

function validateField(
  eventType = "submit",
  regularExpression,
  inputId,
  errroMessageText,
  errorMessageId
) {
  let validateResult = validateInput(regularExpression, inputId);

  switch (eventType) {
    case "blur":
      if (validateResult == INCORRECT_INPUT)
        showErrorMessage(errorMessageId, errroMessageText);
      break;
    case "input":
      if (validateResult == CORRECT_INPUT || validateResult == VOID_INPUT)
        hideErrorMessage(errorMessageId);
      break;
    case "submit":
      if (validateResult == INCORRECT_INPUT)
        showErrorMessage(errorMessageId, errroMessageText);
      else hideErrorMessage(errorMessageId);
      break;
  }

  return validateResult == CORRECT_INPUT;
}
function validateInput(regularExpression, inputId) {
  const input = document.getElementById(inputId);
  if (input.value.trim() === "") {
    return VOID_INPUT;
  }
  if (input.value.match(regularExpression)) {
    return CORRECT_INPUT;
  } else {
    input.focus();
    return INCORRECT_INPUT;
  }
}
function hideErrorMessage(errorMessageId) {
  const errorMessage = document.getElementById(errorMessageId);
  errorMessage.textContent = "";
  errorMessage.classList.remove("visible");
}
function showErrorMessage(errorMessageId, errroMessageText) {
  const errorMessage = document.getElementById(errorMessageId);
  errorMessage.textContent = errroMessageText;
  errorMessage.classList.add("visible");
}
