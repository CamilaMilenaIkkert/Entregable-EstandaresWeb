//Carrusel
let currentIndex = 0;

function moveCarousel(direction) {
    const cards = document.querySelectorAll('.carousel-card');
    cards[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + cards.length) % cards.length;
    cards[currentIndex].classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.carousel-card');
    cards[currentIndex].classList.add('active');
});

// Boton volver arriba
window.addEventListener('scroll', function() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

//Formulario
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  

    const notification = document.getElementById('notification');
    notification.classList.remove('hidden');
    notification.classList.add('visible');

    setTimeout(function() {
        notification.classList.remove('visible');
        notification.classList.add('hidden');
    }, 3000);

    document.getElementById('contact-form').reset();
});
