const quest = document.querySelectorAll(".question");

quest.forEach(function (head) {
  head.addEventListener("click", function () {
    const answer = head.nextElementSibling;

    answer.classList.toggle("hidden");
  });
});
