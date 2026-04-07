/* =========================================================
   1. GLOBAL SELECTORS & SAFETY CHECKS
   ========================================================= */
const header = document.getElementById("siteHeader");
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const fadeItems = document.querySelectorAll(".fade-in");

/* =========================================================
   2. HEADER SCROLL EFFECT
   (Adds background when user scrolls down for readability)
   ========================================================= */
window.addEventListener("scroll", function () {
  if (header) {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
});

/* =========================================================
   3. MOBILE MENU LOGIC
   ========================================================= */
if (mobileMenuToggle && mobileMenu) {
  mobileMenuToggle.addEventListener("click", function () {
    const isActive = mobileMenu.classList.toggle("active");
    mobileMenuToggle.setAttribute("aria-expanded", isActive);
    // Accessibility: Prevent background scrolling when menu is open
    document.body.style.overflow = isActive ? "hidden" : "";
  });
}

// Close mobile menu automatically when a link is clicked
document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", function () {
    if (mobileMenu) {
      mobileMenu.classList.remove("active");
      document.body.style.overflow = "";
    }
    if (mobileMenuToggle) {
      mobileMenuToggle.setAttribute("aria-expanded", "false");
    }
  });
});

/* =========================================================
   4. FADE-IN REVEAL ANIMATION
   (Triggers when sections enter the viewport)
   ========================================================= */
if (fadeItems.length > 0) {
  const observerOptions = { threshold: 0.15 };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // Optimization: Unobserve once visible
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeItems.forEach((item) => observer.observe(item));
}

/* =========================================================
   5. WINDSOR SAVINGS CALCULATOR
   (Calculates real-time savings vs 1-month commission)
   ========================================================= */
const rentSlider = document.getElementById("rentSlider");
const rentDisplay = document.getElementById("rentDisplay");
const mlsOnlySave = document.getElementById("mlsOnlySave");
const mlsTenantSave = document.getElementById("mlsTenantSave");
const fullServiceCost = document.getElementById("fullServiceCost");

// Helper function for Canadian currency formatting
function formatCAD(value) {
  return "$" + Number(value).toLocaleString('en-CA');
}

function updateSavingsCalculator() {
  if (!rentSlider) return;

  const rent = Number(rentSlider.value);
  const mlsCost = 549;
  const placementTotal = 1099; // $549 (MLS) + $200 (Upfront) + $350 (Success)

  // 1. Update the Current Rent Display
  if (rentDisplay) {
    rentDisplay.textContent = formatCAD(rent);
  }

  // 2. Update "Full Service" base cost (1-month rent)
  if (fullServiceCost) {
    fullServiceCost.textContent = formatCAD(rent) + " + HST";
  }

  // 3. Update Savings Labels
  if (mlsOnlySave) {
    const savings = rent - mlsCost;
    mlsOnlySave.textContent = "Save " + formatCAD(savings) + " vs Full Service";
  }

  if (mlsTenantSave) {
    const savings = rent - placementTotal;
    mlsTenantSave.textContent = "Save " + formatCAD(savings) + " vs Full Service";
  }
}

// Initialize Calculator if on the page
if (rentSlider) {
  rentSlider.addEventListener("input", updateSavingsCalculator);
  // Run once on load to set initial values
  updateSavingsCalculator();
}