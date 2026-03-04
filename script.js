// Mobile menu toggle
const menuButton = document.getElementById('menu-btn');
const mobileNav = document.getElementById('mobile-nav');

if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
  });

  // Close mobile menu after clicking a link
  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.add('hidden');
    });
  });
}

// Reveal animation on scroll using IntersectionObserver
const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  // Fallback for older browsers
  revealElements.forEach((element) => element.classList.add('show'));
}

// Dynamic copyright year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
