<<<<<<< HEAD
const header = document.getElementById("siteHeader");
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const fadeItems = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", function () {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

mobileMenuToggle.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");

  const expanded = mobileMenu.classList.contains("active");
  mobileMenuToggle.setAttribute("aria-expanded", expanded);
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
    mobileMenuToggle.setAttribute("aria-expanded", "false");
  });
});

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
=======
{\rtf1\ansi\ansicpg1252\cocoartf2868
\cocoatextscaling0\cocoaplatform0{\fonttbl}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
}
>>>>>>> 623dcd33ff09484a1e40e81415bf34db92af837f
