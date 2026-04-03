const header = document.getElementById("siteHeader");
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const fadeItems = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", function () {
  if (header && window.scrollY > 40) {
    header.classList.add("scrolled");
  } else if (header) {
    header.classList.remove("scrolled");
  }
});

if (mobileMenuToggle && mobileMenu) {
  mobileMenuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");

    const expanded = mobileMenu.classList.contains("active");
    mobileMenuToggle.setAttribute("aria-expanded", expanded);
  });
}

document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", function () {
    if (mobileMenu) {
      mobileMenu.classList.remove("active");
    }
    if (mobileMenuToggle) {
      mobileMenuToggle.setAttribute("aria-expanded", "false");
    }
  });
});

if (fadeItems.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  fadeItems.forEach((item) => {
    observer.observe(item);
  });
}