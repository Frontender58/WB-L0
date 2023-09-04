// Задаем ключевые значения для имени
const nameInputId = "firstName";
const nameErrorMessageId = "nameErrorMessage";
const nameVoidMessageText = "Укажите имя";
const nameRegex = "";

// Задаем ключевые значения для фамилии
const lastNameInputId = "lastName";
const lastNameErrorMessageId = "lastnameErrorMessage";
const lastNameVoidMessageText = "Введите фамилию";
const lastNameRegex = "";

// Задаем ключевые значения для ввода емаил
const emailInputId = "emailInput";
const emailErrorMessageId = "emailErrorMessage";
const emailErrorMessageText = "Проверьте адрес электронной почты";
const emailVoidMessageText = "Укажите электронную почту";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Задаем ключевые значения для ввода телефона
const phoneInputId = "phoneInput";
const phoneErrorMessageId = "phoneErrorMessage";
const phoneErrorMessageText = "Формат: +9 999 999 99 99";
const phoneVoidMessageText = "Укажите номер телефона";
const phoneRegex = /^\+\d \d{3} \d{3} \d{2} \d{2}$/;

// Задаем ключевые значения для ввода инн
const innInputId = "innInput";
const innErrorMessageId = "innErrorMessage";
const innErrorMessageText = "Проверьте ИНН";
const innVoidMessageText = "Укажите ИНН";
const innRegex = /^\d{14}$/;

// Своего рода перечисления для результата валидации
const CORRECT_INPUT = 1;
const INCORRECT_INPUT = 2;
const VOID_INPUT = 3;

window.onload = function () {
  document.querySelectorAll("#" + emailInputId).forEach(function (element) {
    element.addEventListener("blur", validateEmail);
  });
  document.querySelectorAll("#" + emailInputId).forEach(function (element) {
    element.addEventListener("input", validateEmail);
  });

  document.querySelectorAll("#" + phoneInputId).forEach(function (element) {
    element.addEventListener("blur", validatePhone);
  });
  document.querySelectorAll("#" + phoneInputId).forEach(function (element) {
    element.addEventListener("input", validatePhone);
  });

  document.querySelectorAll("#" + innInputId).forEach(function (element) {
    element.addEventListener("blur", validateInn);
  });
  document.querySelectorAll("#" + innInputId).forEach(function (element) {
    element.addEventListener("input", validateInn);
  });

  document.querySelectorAll("#" + nameInputId).forEach(function (element) {
    element.addEventListener("blur", validateName);
  });
  document.querySelectorAll("#" + nameInputId).forEach(function (element) {
    element.addEventListener("input", validateName);
  });

  document.querySelectorAll("#" + lastNameInputId).forEach(function (element) {
    element.addEventListener("blur", validateLastName);
  });
  document.querySelectorAll("#" + lastNameInputId).forEach(function (element) {
    element.addEventListener("input", validateLastName);
  });
};

form.addEventListener("submit", function (event) {
  submitCredentialsForm(event);
});

function submitCredentialsForm(event = null) {
  if (event) event.preventDefault();
  if (validateForm()) {
    submitForm();
  } else {
    getDisplayedElement("myForm").scrollIntoView(); // document.getElementById("myForm").scrollIntoView();
    window.scrollBy(0, -150);
  }
}

function validateForm() {
  let results = [];
  results.push(validateName({ type: "submit" }));
  results.push(validateLastName({ type: "submit" }));
  results.push(validateEmail({ type: "submit" }));
  results.push(validatePhone({ type: "submit" }));
  results.push(validateInn({ type: "submit" }));

  return !results.includes(false);
}
function submitForm() {
  alert("Всё введено верно");
}

function validateName(event) {
  return validateField(
    event.type,
    nameRegex,
    nameInputId,
    "",
    nameErrorMessageId,
    nameVoidMessageText
  );
}

function validateLastName(event) {
  return validateField(
    event.type,
    lastNameRegex,
    lastNameInputId,
    "",
    lastNameErrorMessageId,
    lastNameVoidMessageText
  );
}

function validateEmail(event) {
  return validateField(
    event.type,
    emailRegex,
    emailInputId,
    emailErrorMessageText,
    emailErrorMessageId,
    emailVoidMessageText
  );
}

function validatePhone(event) {
  return validateField(
    event.type,
    phoneRegex,
    phoneInputId,
    phoneErrorMessageText,
    phoneErrorMessageId,
    phoneVoidMessageText
  );
}
function validateInn(event) {
  return validateField(
    event.type,
    innRegex,
    innInputId,
    innErrorMessageText,
    innErrorMessageId,
    innVoidMessageText
  );
}

function validateField(
  eventType = "submit",
  regularExpression,
  inputId,
  errroMessageText,
  errorMessageId,
  voidMessageText = "HUUI"
) {
  let validateResult = validateInput(regularExpression, inputId);

  switch (eventType) {
    case "blur":
      if (validateResult == INCORRECT_INPUT)
        showErrorMessage(errorMessageId, errroMessageText, inputId);
      break;
    case "input":
      if (validateResult == CORRECT_INPUT || validateResult == VOID_INPUT)
        hideErrorMessage(errorMessageId, inputId);
      break;
    case "submit":
      if (validateResult == INCORRECT_INPUT)
        showErrorMessage(errorMessageId, errroMessageText, inputId);
      else if (validateResult == VOID_INPUT)
        showErrorMessage(errorMessageId, voidMessageText, inputId);
      else hideErrorMessage(errorMessageId, inputId);
      break;
  }

  return validateResult == CORRECT_INPUT;
}

function validateInput(regularExpression, inputId) {
  const input = getDisplayedElement(inputId);

  if (input.value.trim() === "") {
    return VOID_INPUT;
  }
  if (regularExpression == "") return CORRECT_INPUT;
  if (input.value.match(regularExpression)) {
    return CORRECT_INPUT;
  } else {
    input.focus();
    return INCORRECT_INPUT;
  }
}
function hideErrorMessage(errorMessageId, inputId) {
  const errorMessage = getDisplayedElement(errorMessageId);
  const input = getDisplayedElement(inputId);
  errorMessage.textContent = "";
  errorMessage.classList.remove("visible");
  input.classList.remove("error__input");
}
function showErrorMessage(errorMessageId, errroMessageText, inputId) {
  const errorMessage = getDisplayedElement(errorMessageId);
  const input = getDisplayedElement(inputId);
  errorMessage.textContent = errroMessageText;
  errorMessage.classList.add("visible");
  console.log(inputId);
  console.log(input);
  input.classList.add("error__input");
}
function getDisplayedElement(elementId) {
  const allElements = document.querySelectorAll("#" + elementId);
  if (!allElements) return null;

  let res = null;

  allElements.forEach((item) => {
    if (!!item.offsetParent) res = item;
  });

  return res;
}
