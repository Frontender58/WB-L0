function changeButtonText() {
  let checkbox = document.getElementById("GreyCheckboxId");
  let button = document.getElementById("booking");

  if (checkbox.checked) {
    button.textContent = "Оплатить 2 101 063 сом";
    button.classList.add("edge__total-order__button-text_styled");
  } else {
    button.textContent = "Заказать";
  }
}

function changeMobileButtonText() {
  let checkbox = document.getElementById("myCheckbox");
  let button = document.getElementById("MobileBooking");

  if (checkbox.checked) {
    button.textContent = "Оплатить 2 101 063 сом";
    button.classList.add("MobileEdge__total-order__button-text_styled");
  } else {
    button.textContent = "Заказать";
  }
}
