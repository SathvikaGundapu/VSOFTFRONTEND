// Hero background image slider
const slides = document.querySelectorAll('.hero-section .bg-slide');
let currentSlide = 0;
const slideInterval = 4000;

setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, slideInterval);

// Scroll reveal animation for service cards
function revealServiceCards() {
  document.querySelectorAll('.service-card').forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 24) {
      card.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealServiceCards);
window.addEventListener('load', revealServiceCards);