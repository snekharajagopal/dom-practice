const counter = document.querySelector("#count");
const plusbtn = document.querySelector("#plus");
const minusbtn = document.querySelector("#minus");
const resetbtn = document.querySelector("#reset");

let count = 0;

function updateCounter() {
  counter.textContent = count;

  if (count < 0) {
    counter.classList.add("negative");
  } else {
    counter.classList.remove("negative");
  }
}

plusbtn.addEventListener("click", function () {
  count++;
  updateCounter();
});

minusbtn.addEventListener("click", function () {
  count--;
  updateCounter();
});

resetbtn.addEventListener("click", function () {
  count = 0;
  updateCounter();
});
