const header = document.getElementById("siteHeader");
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const mobileMenu = document.getElementById("mobileMenu");

window.addEventListener("scroll", function () {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

mobileMenuToggle.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
});