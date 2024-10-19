document
  .getElementById("dark-mode-toggle")
  .addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
  });

document.addEventListener("DOMContentLoaded", function () {
  const collapseButton = document.getElementById("collapse");
  const sidebar = document.querySelector(".sideBar");

  // Add click event listener to toggle collapsed class
  collapseButton.addEventListener("click", function () {
    sidebar.classList.toggle("collapsed");
  });
});
