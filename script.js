document.addEventListener('DOMContentLoaded', () => {
    // 1. Gestion du Menu Mobile (Hamburger)
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', () => {
            navbar.classList.toggle('active');
            menuIcon.classList.toggle('fa-bars');
            menuIcon.classList.toggle('fa-times');
        });

        // Fermer le menu après un clic sur un lien
        navbar.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            });
        });
    }

    // 2. Animation simple d'apparition (Optionnel mais joli)
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card, .skill-item, .timeline-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
    
    // Classe CSS pour l'animation (ajoutée dynamiquement)
    const style = document.createElement('style');
    style.innerHTML = `
        .visible { opacity: 1 !important; transform: translateY(0) !important; }
    `;
    document.head.appendChild(style);
});