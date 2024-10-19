// Get the canvas element
const ctx = document.getElementById("myChart").getContext("2d");

// Data and configuration for the bar chart
const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "",
      data: [700, 950, 750, 450, 1000, 550, 850, 350, 850, 700, 950, 600],
      backgroundColor: "#8576FF",
      borderColor: "#8576FF",
      borderWidth: 1,
      hoverBackgroundColor: "#8576ff",
      hoverBorderColor: "#8576ff",
    },
  ],
};

// Configuration for the chart
const config = {
  type: "bar",
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true, // Start the y-axis at 0
        ticks: {
          stepSize: 200, // Make the y-axis increase by 200
          color: "#64748B", // Default text color for light mode
        },
      },
      x: {
        ticks: {
          color: "#64748B", // Default text color for light mode
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
  },
};

// Render the chart
const myChart = new Chart(ctx, config);

// Toggle dark mode on button click
document.getElementById("dark-mode-toggle").addEventListener("click", () => {
  // Check current tick color and toggle
  const currentTickColor = myChart.options.scales.y.ticks.color;

  if (currentTickColor === "#64748B") {
    // Switch to dark mode colors
    myChart.options.scales.y.ticks.color = "#fff"; // White text color for ticks
    myChart.options.scales.x.ticks.color = "#fff"; // White text color for ticks
  } else {
    // Switch back to light mode colors
    myChart.options.scales.y.ticks.color = "#64748B"; // Black text color for ticks
    myChart.options.scales.x.ticks.color = "#64748B"; // Black text color for ticks
  }

  // Refresh the chart to apply changes
  myChart.update();
});
