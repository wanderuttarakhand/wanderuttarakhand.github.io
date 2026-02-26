const toggleButton = document.getElementById("menuToggle");
const navMenu = document.getElementById("navbarNav");
const icon = toggleButton.querySelector("i");

toggleButton.addEventListener("click", function () {
  navMenu.classList.toggle("show");

  // Switch icon
  if (navMenu.classList.contains("show")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});