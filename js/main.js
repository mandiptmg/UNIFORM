// Mobile Menu Functionality
const menuBtn = document.getElementById('menuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');

function openMobileMenu() {
  mobileMenu.classList.add('active');
  mobileOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  mobileMenu.classList.remove('active');
  mobileOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

menuBtn?.addEventListener('click', openMobileMenu);
closeMenuBtn?.addEventListener('click', closeMobileMenu);
mobileOverlay?.addEventListener('click', closeMobileMenu);

// Close mobile menu when clicking on a link
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
mobileNavLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

// Tab Functionality for Latest Collections
const tabBtns = document.querySelectorAll('.section-tabs .tab-btn');

tabBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    // Remove active class from all tabs
    tabBtns.forEach(tab => tab.classList.remove('active'));
    // Add active class to clicked tab
    this.classList.add('active');
    
    // Here you would typically load different products based on the tab
    const tabName = this.dataset.tab;
    console.log(`Switched to ${tabName} tab`);
  });
});

// Category Tabs Functionality
const categoryBtns = document.querySelectorAll('.category-tabs .category-btn');

categoryBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    // Remove active class from all category buttons
    categoryBtns.forEach(tab => tab.classList.remove('active'));
    // Add active class to clicked button
    this.classList.add('active');
    
    // Here you would typically filter products based on category
    const category = this.textContent;
    console.log(`Filtered by category: ${category}`);
  });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementTop < windowHeight - 100) {
      element.classList.add('revealed');
    }
  });
}

// Add reveal class to sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
  section.classList.add('reveal');
});

// Initial check and scroll listener
window.addEventListener('load', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.boxShadow = 'none';
  }
  
  lastScrollY = window.scrollY;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm?.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = this.querySelector('input[type="email"]').value;
  
  // Show success message (in a real app, you'd send this to a server)
  alert(`Thank you for subscribing with: ${email}`);
  this.reset();
});

// Product card hover effect enhancement
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.cursor = 'pointer';
  });
  
  card.addEventListener('click', function() {
    const productName = this.querySelector('.product-name')?.textContent;
    console.log(`Clicked on ${productName}`);
    // In a real app, this would navigate to the product detail page
  });
});

// Search button functionality
const searchBtn = document.querySelector('.search-btn');
searchBtn?.addEventListener('click', function() {
  // In a real app, this would open a search modal or redirect to search page
  const searchTerm = prompt('Enter search term:');
  if (searchTerm) {
    console.log(`Searching for: ${searchTerm}`);
  }
});

// Get a Quote button
const quoteBtn = document.querySelector('.btn-quote');
quoteBtn?.addEventListener('click', function(e) {
  e.preventDefault();
  // In a real app, this would open a quote modal or redirect to quote page
  alert('Get a Quote feature coming soon!');
});

// Add loading animation for images
const images = document.querySelectorAll('img');
images.forEach(img => {
  img.addEventListener('load', function() {
    this.style.opacity = '1';
  });
  img.style.opacity = '0';
  img.style.transition = 'opacity 0.3s ease';
});

// Intersection Observer for better performance
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

console.log('UNIFORM website loaded successfully!');
