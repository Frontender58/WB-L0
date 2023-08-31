document.getElementById("myForm").addEventListener("submit", function (event) {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let errorFlag = false;

  if (firstName === "") {
    document.getElementById("firstName").placeholder = "Укажите имя";
    document.getElementById("firstName").style.color = "orange";
    document.getElementById("firstNameError").innerHTML = "Укажите имя";
    errorFlag = true;
  } else {
    document.getElementById("firstNameError").innerHTML = "";
  }

  if (lastName === "") {
    document.getElementById("lastName").placeholder = "Укажите фамилию";
    document.getElementById("lastName").style.color = "orange";
    document.getElementById("lastNameError").innerHTML = "Укажите фамилию";
    errorFlag = true;
  } else {
    document.getElementById("lastNameError").innerHTML = "";
  }

  if (errorFlag) {
    event.preventDefault();
  }
});
