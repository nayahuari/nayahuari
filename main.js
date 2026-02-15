console.log("Nayahuari activo 💃🕺");

// --------------------
// MENU RESPONSIVO
// --------------------
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.querySelector('span').textContent = navLinks.classList.contains('active') ? 'close' : 'menu';
});

// Cerrar menú al hacer click en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.querySelector('span').textContent = 'menu';
        }
    });
});

// --------------------
// SCROLL REVEAL ANIMATIONS
// --------------------
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// --------------------
// SOCIAL BUTTON CLICK ANIMATION
// --------------------
document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.add('click-anim');
        setTimeout(() => btn.classList.remove('click-anim'), 300);
    });
});

// --------------------
// FADE IN HERO TEXT ON LOAD
// --------------------
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('active');
    }
});
