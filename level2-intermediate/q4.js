const formInput = document.querySelector("#userForm");
const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const resultOutput = document.querySelector("#result");
formInput.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = nameInput.value;
  const age = Number(ageInput.value);
  if (age < 18) {
    resultOutput.textContent = "Sorry, you must be 18 or older!";
  } else {
    resultOutput.textContent = "Thank you, " + username;
  }
});
