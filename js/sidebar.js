// Function for DarkMode
document
  .getElementById("dark-mode-toggle")
  .addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
  });

// Function for collapsible sidebar
document.addEventListener("DOMContentLoaded", function () {
  const collapseButton = document.getElementById("collapse");
  const sidebar = document.querySelector(".sideBar");

  // Add click event listener to toggle collapsed class
  collapseButton.addEventListener("click", function () {
    sidebar.classList.toggle("collapsed");
  });
});

// Select the elements for Mobile sidebar
const sidebar = document.getElementById("sidebarMobile");
const menuIcon = document.querySelector(".menuIcon");

// Toggle sidebar visibility on hamburger menu click
menuIcon.addEventListener("click", function () {
  sidebar.classList.toggle("active");
  menuIcon.classList.toggle("active");
});
