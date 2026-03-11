/* =====================================================
   DOM ELEMENTS
===================================================== */

const navbar = document.querySelector(".navbar");

const menuBtn = document.getElementById("menuBtn");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileOverlay = document.getElementById("mobileOverlay");

const searchBtn = document.querySelector(".search-btn");
const searchModal = document.getElementById("searchModal");
const closeSearch = document.getElementById("closeSearch");
const searchOverlay = document.querySelector(".search-overlay");

const tabBtns = document.querySelectorAll(".section-tabs .tab-btn");
const categoryBtns = document.querySelectorAll(".category-tabs .category-btn");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-links a");
const productCards = document.querySelectorAll(".product-card");
const revealElements = document.querySelectorAll("section");

const newsletterForm = document.querySelector(".newsletter-form");

/* =====================================================
   MOBILE MENU
===================================================== */

function openMobileMenu() {
  mobileMenu?.classList.add("active");
  mobileOverlay?.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeMobileMenu() {
  mobileMenu?.classList.remove("active");
  mobileOverlay?.classList.remove("active");
  document.body.style.overflow = "";
}

menuBtn?.addEventListener("click", openMobileMenu);
closeMenuBtn?.addEventListener("click", closeMobileMenu);
mobileOverlay?.addEventListener("click", closeMobileMenu);

mobileNavLinks.forEach(link =>
  link.addEventListener("click", closeMobileMenu)
);

/* =====================================================
   SEARCH MODAL
===================================================== */

function openSearchModal() {
  searchModal?.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeSearchModal() {
  searchModal?.classList.remove("active");
  document.body.style.overflow = "";
}

searchBtn?.addEventListener("click", openSearchModal);
closeSearch?.addEventListener("click", closeSearchModal);
searchOverlay?.addEventListener("click", closeSearchModal);

/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

window.addEventListener("scroll", () => {
  navbar?.classList.toggle("navbar-fixed", window.scrollY >= 42);
});

/* =====================================================
   TABS
===================================================== */

function activateTab(buttons, activeBtn) {
  buttons.forEach(btn => btn.classList.remove("active"));
  activeBtn.classList.add("active");
}

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    activateTab(tabBtns, btn);
    console.log(`Switched to ${btn.dataset.tab}`);
  });
});

categoryBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    activateTab(categoryBtns, btn);
    console.log(`Filtered by category: ${btn.textContent}`);
  });
});

/* =====================================================
   SMOOTH SCROLL
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;

    e.preventDefault();

    const offset = 80;
    const top =
      target.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  });
});

/* =====================================================
   NEWSLETTER FORM
===================================================== */

newsletterForm?.addEventListener("submit", e => {
  e.preventDefault();

  const email = newsletterForm.querySelector('input[type="email"]').value;

  alert(`Thank you for subscribing with: ${email}`);
  newsletterForm.reset();
});

/* =====================================================
   PRODUCT CARD INTERACTION
===================================================== */

productCards.forEach(card => {
  card.style.cursor = "pointer";

  card.addEventListener("click", () => {
    const name = card.querySelector(".product-name")?.textContent;
    console.log(`Clicked on ${name}`);
  });
});

/* =====================================================
   IMAGE FADE IN
===================================================== */

document.querySelectorAll("img").forEach(img => {
  img.style.opacity = "0";
  img.style.transition = "opacity 0.3s ease";

  img.addEventListener("load", () => {
    img.style.opacity = "1";
  });
});

/* =====================================================
   SCROLL REVEAL (INTERSECTION OBSERVER)
===================================================== */

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

revealElements.forEach(section => {
  section.classList.add("reveal");
  observer.observe(section);
});

/* =====================================================
   INIT
===================================================== */

window.addEventListener("load", () => {
  console.log("UNIFORM website loaded successfully!");
});