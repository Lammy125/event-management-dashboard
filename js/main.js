// Array of background images
const images = [
  "/images/Slide-female.png",
  "/images/Slide-male.png",
  "/images/Slide-table.png",
];

let currentIndex = 0;
let autoSlideInterval;

// Get the elements
const imageSlider = document.querySelector(".imageSlider");
const nextButton = document.getElementById("nextBtn");
const prevButton = document.getElementById("prevBtn");
const dots = document.querySelectorAll(".dot");

// Function to update the background image
function updateBackground() {
  imageSlider.style.backgroundImage = `url(${images[currentIndex]})`;

  // Update the active dot
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// Function to handle next image
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateBackground();
}

// Function to handle previous image
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateBackground();
}

// Start the auto-slide functionality
function startAutoSlide() {
  autoSlideInterval = setInterval(nextImage, 5000); // Change every 5 seconds
}

// Stop the auto-slide
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Next button click
nextButton.addEventListener("click", function () {
  stopAutoSlide();
  nextImage();
  startAutoSlide();
});

// Previous button click
prevButton.addEventListener("click", function () {
  stopAutoSlide();
  prevImage();
  startAutoSlide();
});

// Initialize with the first image and start auto-slide
updateBackground();
startAutoSlide();

// toggle event visibility for mobile view
document.querySelectorAll(".eventNameCon").forEach((item) => {
  item.addEventListener("click", function () {
    // Find the associated eventSpeakerCon for this event
    const speakerCon = this.nextElementSibling;

    // Toggle the 'show' class on the eventSpeakerCon
    speakerCon.classList.toggle("show");

    // Toggle the 'active' class on the eventNameCon to change the background
    this.classList.toggle("active");
  });
});
