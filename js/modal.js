// Get modal element and close button
const modal = document.getElementById("event-modal");
const closeButton = document.querySelector(".close");

// Function to show the modal
function openModal() {
  modal.classList.add("show");
}

// Function to hide the modal
function closeModal() {
  modal.classList.remove("show");
}

// When an event is clicked, show the modal
const eventItems = document.querySelectorAll(".event-item");
eventItems.forEach((item) => {
  item.addEventListener("click", openModal);
});

// When close button is clicked, hide the modal
closeButton.addEventListener("click", closeModal);

// Close modal when clicking outside the modal content
window.addEventListener("click", function (e) {
  if (e.target == modal) {
    closeModal();
  }
});
