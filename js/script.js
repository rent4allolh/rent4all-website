/* =========================
   HEADER SCROLL EFFECT
========================== */
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

/* =========================
   MOBILE MENU TOGGLE
========================== */
if (mobileMenuToggle && mobileMenu) {
  mobileMenuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");

    const expanded = mobileMenu.classList.contains("active");
    mobileMenuToggle.setAttribute("aria-expanded", expanded);
  });
}

/* =========================
   CLOSE MOBILE MENU ON CLICK
========================== */
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

/* =========================
   FADE-IN ON SCROLL
========================== */
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
/* =========================
   PRICING SAVINGS CALCULATOR
========================== */
const rentSlider = document.getElementById("rentSlider");
const rentDisplay = document.getElementById("rentDisplay");
const mlsOnlyCost = document.getElementById("mlsOnlyCost");
const mlsOnlySave = document.getElementById("mlsOnlySave");
const mlsTenantCost = document.getElementById("mlsTenantCost");
const mlsTenantSave = document.getElementById("mlsTenantSave");
const fullServiceCost = document.getElementById("fullServiceCost");

function formatCurrency(value) {
  return "$" + Number(value).toLocaleString();
}

function updateSavingsCalculator() {
  if (!rentSlider) return;

  const rent = Number(rentSlider.value);
  const mlsOnly = 549;
  const mlsTenant = 1099;
  const fullService = rent;

  if (rentDisplay) {
    rentDisplay.textContent = formatCurrency(rent);
  }

  if (mlsOnlyCost) {
    mlsOnlyCost.textContent = formatCurrency(mlsOnly) + " + HST";
  }

  if (mlsTenantCost) {
    mlsTenantCost.textContent = formatCurrency(mlsTenant) + " + HST";
  }

  if (fullServiceCost) {
    fullServiceCost.textContent = formatCurrency(fullService) + " + HST";
  }

  if (mlsOnlySave) {
    mlsOnlySave.textContent = "Save " + formatCurrency(fullService - mlsOnly) + " vs Full Service";
  }

  if (mlsTenantSave) {
    mlsTenantSave.textContent = "Save " + formatCurrency(fullService - mlsTenant) + " vs Full Service";
  }
}

if (rentSlider) {
  rentSlider.addEventListener("input", updateSavingsCalculator);
  updateSavingsCalculator();
}