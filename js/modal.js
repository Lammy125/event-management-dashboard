// Get modal element and close button
const modal = document.getElementById("event-modal");
const closeButton = document.querySelector(".close img"); // Use the img inside the close div

// Function to show the modal
function openModal(event) {
  let eventName, eventDate;

  // Check if the clicked element is from the table row
  if (event.currentTarget.tagName === "TR") {
    // For the table row event
    eventName = event.currentTarget.children[0].textContent; // Event name from the first cell
    eventDate = event.currentTarget.children[1].textContent; // Event date from the second cell
  } else {
    // For the div structure
    const eventContainer = event.currentTarget.previousElementSibling;
    eventName = eventContainer.querySelector(".eventName span").textContent; // Event name from the div
    eventDate = event.currentTarget.querySelector("span").textContent; // Event date from the div
  }

  // Update the modal content with event name and date
  document.getElementById("modal-event-name").textContent = eventName;
  document.getElementById("modal-event-date").textContent = eventDate;

  // Show the modal
  modal.classList.add("show");
}

// Function to hide the modal
function closeModal() {
  modal.classList.remove("show");
}

// Add event listeners to all event items (both table rows and divs)
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
