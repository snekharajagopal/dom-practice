const filterButtons = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".card");

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const selectedCategory = button.getAttribute("data-filter");

        cards.forEach(function(card) {
            const category = card.getAttribute("data-category");

            if (selectedCategory === "all" || category === selectedCategory) {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }
        });
    });
});