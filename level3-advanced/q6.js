const addButtons = document.querySelectorAll(".addBtn");
const cartList = document.querySelector("#cartList");
const totalDisplay = document.querySelector("#total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function displayCart() {
  cartList.innerHTML = "";

  let total = 0;

  cart.forEach(function (item) {
    const li = document.createElement("li");

    li.textContent = item.name + " - ₹" + item.price;

    cartList.append(li);

    total += item.price;
  });

  totalDisplay.textContent = total;
  saveCart();
}

addButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const name = button.getAttribute("data-name");
    const price = Number(button.getAttribute("data-price"));

    cart.push({
      name: name,
      price: price,
    });

    displayCart();
  });
});

displayCart();
