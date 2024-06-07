let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel img');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentSlide);
    });
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

function autoSlide() {
    changeSlide(1);
    setTimeout(autoSlide, 3000); // Cambia de imagen cada 3 segundos
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(autoSlide, 3000); // Inicia el carrusel automáticamente
});