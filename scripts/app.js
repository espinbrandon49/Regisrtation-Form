const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");
const submit = document.getElementById("submit");
const elements = document.querySelectorAll("input");

function formSubmittedSuccessfully() {
  if ((username.value.length >= 6) &&
    (/.+@.+\.com/.test(email.value)) &&
    (password.value.length > 3 && password.value.length <= 12) &&
    (confirm.value == password.value)) {
    document.querySelectorAll("input").forEach(e => e.value = "");
    alert("You have successfully registered")
  }
}

function submitInput() {
  const valid = true;
  elements.forEach(e => validateInput(e, valid, ""));

  if (username.value.trim().length < 6) {
    validateInput(username, !valid, "Username must be at least 6 characters");
  }
  if (!/.+@.+\.com/.test(email.value.trim())) {
    validateInput(email, !valid, "Email invalid");
  }
  if (password.value.trim().length < 3 || password.value.length > 12) {
    validateInput(password, !valid, "Password must be between 3 and 12 characters");
  }

  if (confirm.value != password.value) {
    validateInput(confirm, !valid, "Passwords do not match match");
  }
}

function validateInput(element, valid, message) {
  element.style.borderColor = valid ? "#2ecc71" : "#e74c3c";
  document.getElementById(`${element.id}InvalidMsg`).innerHTML = message;
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  submitInput();
  formSubmittedSuccessfully();
})
