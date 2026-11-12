const nameInput = document.querySelector("#username");

const btn = document.querySelector("#saveBtn");

const greet = document.querySelector("#greeting");


const savedName = localStorage.getItem("name");


if (savedName) {
    greet.textContent = "Welcome back, " + savedName;
}


btn.addEventListener("click", function () {

    const username = nameInput.value.trim();


        localStorage.setItem("name", username);

        greet.textContent = "Welcome, " + username;

    

});