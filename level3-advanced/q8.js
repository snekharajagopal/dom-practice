const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");
const modal = document.querySelector("#modal");

openBtn.addEventListener("click", function () {
  modal.classList.remove("modal-hidden");
});

closeBtn.addEventListener("click", function () {
  modal.classList.add("modal-hidden");
});

modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.classList.add("modal-hidden");
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modal.classList.add("modal-hidden");
  }
});
