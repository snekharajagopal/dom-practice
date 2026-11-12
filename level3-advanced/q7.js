const searchInput = document.querySelector("#search");
const cities = document.querySelectorAll("#cityList li");

searchInput.addEventListener("input", function () {
  const searchText = searchInput.value.toLowerCase();

  cities.forEach(function (city) {
    const cityName = city.textContent.toLowerCase();

    if (cityName.includes(searchText)) {
      city.classList.remove("hidden");
    } else {
      city.classList.add("hidden");
    }
  });
});
