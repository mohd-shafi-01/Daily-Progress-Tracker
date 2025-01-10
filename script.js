// Handle click to toggle green color
const days = document.querySelectorAll(".day");

// Load saved state from local storage
days.forEach((day) => {
  const dayId = day.getAttribute("id");
  if (localStorage.getItem(dayId) === "green") {
    day.classList.add("green");
  }
});

// Save state to local storage
days.forEach((day) => {
  day.addEventListener("click", () => {
    day.classList.toggle("green");
    const dayId = day.getAttribute("id");
    if (day.classList.contains("green")) {
      localStorage.setItem(dayId, "green");
    } else {
      localStorage.removeItem(dayId);
    }
  });
});
