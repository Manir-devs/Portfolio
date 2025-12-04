document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const drawerMenu = document.getElementById('drawerMenu');
    const navLinks = drawerMenu.querySelectorAll('a');
    
    // --- 1. Drawer Menu Toggle ---
    
    menuToggle.addEventListener('click', () => {
        drawerMenu.classList.toggle('open');
        // Change icon for better UX
        const icon = menuToggle.querySelector('i');
        if (drawerMenu.classList.contains('open')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times'); // Close icon
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            drawerMenu.classList.remove('open');
            menuToggle.querySelector('i').classList.remove('fa-times');
            menuToggle.querySelector('i').classList.add('fa-bars');
        });
    });

    // --- 2. Scroll Animation Logic ---

    const fadeSections = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, // relative to viewport
        rootMargin: '0px',
        threshold: 0.2 // when 20% of the element is visible
    };

    function handleIntersect(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If the section is visible, add the 'is-visible' class to trigger the animation
                // (The animation is already set on .fade-in, but this ensures it starts on scroll)
                entry.target.style.opacity = 1; 
                entry.target.style.transform = 'translateY(0)';
                // We stop observing once it has animated
                observer.unobserve(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    fadeSections.forEach(section => {
        // Initially set styles that the CSS animation overrides, to ensure the scroll logic works
        section.style.opacity = 0;
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        observer.observe(section);
    });

});