let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const totalSlides = slides.length;

function showSlide(index) {
  const slider = document.querySelector('.hero-slider');
  const offset = -index * 100;
  slider.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

// Iniciar o carrossel automaticamente
setInterval(nextSlide, 5000); // Troca de imagem a cada 5 segundos
