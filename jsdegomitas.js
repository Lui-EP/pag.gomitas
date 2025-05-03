// Script para hacer el menú interactivo
document.addEventListener('DOMContentLoaded', function() {
    // Manejo del menú sticky y cambio de apariencia al scroll
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    
    // Scroll suave a las secciones
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Animación de elementos al hacer scroll
    const fadeElements = document.querySelectorAll('.card, .team-member, .alternating-item');
    fadeElements.forEach(element => {
        element.classList.add('fade-in');
    });
    
    // Función para verificar si un elemento está en el viewport
    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('appear');
            }
        });
    }
    
    // Verificar al cargar y al hacer scroll
    window.addEventListener('scroll', checkFade);
    checkFade();
});