const form = document.querySelector("#registerForm");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const passwordInput = document.querySelector("#password");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const phoneError = document.querySelector("#phoneError");
const passwordError = document.querySelector("#passwordError");
const strength = document.querySelector("#strength");
const result = document.querySelector("#result");

function validateName() {
  if (nameInput.value.trim().length < 3) {
    nameError.textContent = "Name must have at least 3 characters.";
    return false;
  }

  nameError.textContent = "";
  return true;
}

function validateEmail() {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!pattern.test(emailInput.value)) {
    emailError.textContent = "Enter a valid email.";
    return false;
  }

  emailError.textContent = "";
  return true;
}

function validatePhone() {
  const pattern = /^[6-9][0-9]{9}$/;

  if (!pattern.test(phoneInput.value)) {
    phoneError.textContent = "Enter a valid 10-digit phone number.";
    return false;
  }

  phoneError.textContent = "";
  return true;
}

function validatePassword() {
  const password = passwordInput.value;

  if (password.length < 8) {
    passwordError.textContent = "Password must have at least 8 characters.";
    strength.textContent = "Weak";
    return false;
  }

  passwordError.textContent = "";

  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);

  if (hasUpper && hasLower && hasNumber && hasSpecial) {
    strength.textContent = "Strong password";
  } else {
    strength.textContent = "Medium password";
  }

  return true;
}

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
phoneInput.addEventListener("input", validatePhone);
passwordInput.addEventListener("input", validatePassword);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameOK = validateName();
  const emailOK = validateEmail();
  const phoneOK = validatePhone();
  const passwordOK = validatePassword();

  if (nameOK && emailOK && phoneOK && passwordOK) {
    result.textContent = "Registration successful!";
    form.reset();
    strength.textContent = "";
  } else {
    result.textContent = "Please correct the errors.";
  }
});
