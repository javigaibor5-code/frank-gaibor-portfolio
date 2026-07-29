// ---------------------------------------------
// Personal Portfolio - Simple interactions
// Proyecto 3 de portafolio
// ---------------------------------------------

// Mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('is-open');
});

// Close mobile menu after clicking a link
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
  });
});

// Dynamic copyright year
document.getElementById('year').textContent = new Date().getFullYear();
