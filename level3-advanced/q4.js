const tabs = document.querySelector("#tabs");
const panels = document.querySelectorAll(".panel");

tabs.addEventListener("click", function (event) {
  if (!event.target.matches(".tab")) {
    return;
  }

  const selectedTab = event.target.getAttribute("data-tab");

  panels.forEach(function (panel) {
    panel.classList.add("hidden");
  });

  const selectedPanel = document.querySelector("#" + selectedTab);

  selectedPanel.classList.remove("hidden");
});
