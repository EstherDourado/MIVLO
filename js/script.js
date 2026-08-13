// Initialize Icons
lucide.createIcons();

// Mobile Menu Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
let isMenuOpen = false;

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    if(isMenuOpen) {
        mobileMenu.classList.remove('translate-x-full');
        document.body.style.overflow = 'hidden'; // Prevent background scroll
        mobileMenuBtn.innerHTML = '<i data-lucide="x"></i>';
    } else {
        mobileMenu.classList.add('translate-x-full');
        document.body.style.overflow = '';
        mobileMenuBtn.innerHTML = '<i data-lucide="menu"></i>';
    }
    lucide.createIcons();
}

mobileMenuBtn.addEventListener('click', toggleMenu);
mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('glass-panel');
        navbar.classList.remove('border-transparent');
    } else {
        navbar.classList.remove('glass-panel');
        navbar.classList.add('border-transparent');
    }
}, { passive: true });

// Accordion Logic
function toggleAccordion(button) {
    const item = button.parentElement;
    const isActive = item.classList.contains('active');
    
    document.querySelectorAll('.accordion-item').forEach(acc => {
        acc.classList.remove('active');
    });

    if (!isActive) {
        item.classList.add('active');
    }
}

// Intersection Observer for scroll reveal animations
const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px', // Trigger slightly before element comes fully into view
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target); // Animate only once
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach((element) => {
    observer.observe(element);
});