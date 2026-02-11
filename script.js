const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navActions = document.querySelector(".nav-actions");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  navActions.classList.toggle("active");
});
