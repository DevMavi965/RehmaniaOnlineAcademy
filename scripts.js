document.addEventListener('DOMContentLoaded', function () {
    // Hide loader once the page is fully loaded
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.display = 'none';
    }

    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
            navToggle.setAttribute('aria-expanded', !expanded);
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('open');
        });
    }

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('.nav-links a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                // Close mobile menu after click
                if (navLinks.classList.contains('open')) {
                    navToggle.classList.remove('active');
                    navToggle.setAttribute('aria-expanded', false);
                    navLinks.classList.remove('open');
                }
            }
        });
    });

    // Animate home section on load
    const homeSection = document.querySelector('.home-section');
    if (homeSection) {
        setTimeout(() => {
            homeSection.classList.add('visible');
        }, 100);
    }
});
