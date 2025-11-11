// Initialize page interactions
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80; // Header height
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Elements to animate on scroll
    const animatedElements = [
        '.benefit-card',
        '.check-item',
        '.workflow-detail > div',
        '.visual-card'
    ];
    
    animatedElements.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Add hover effect to cards
    document.querySelectorAll('.benefit-card, .check-item').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Animate metrics on scroll
    const animateValue = (element, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            const current = Math.floor(progress * (end - start) + start);
            if (element.textContent.includes('%')) {
                element.textContent = (current > 0 ? '+' : '') + current + '%';
            } else if (element.textContent.includes('h')) {
                element.textContent = current + 'h';
            } else {
                element.textContent = (current > 0 ? '-' : '') + current + '%';
            }
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };
    
    // Observe metrics for animation
    const metricsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                const value = entry.target.textContent;
                
                if (value === '-65%') {
                    animateValue(entry.target, 0, -65, 1000);
                } else if (value === '+47%') {
                    animateValue(entry.target, 0, 47, 1000);
                }
                // La troisième métrique (✓) n'a pas besoin d'animation
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.metric-value').forEach(metric => {
        metricsObserver.observe(metric);
    });
    
    // Dynamic year for copyright (if needed)
    const year = new Date().getFullYear();
    const yearElements = document.querySelectorAll('.current-year');
    yearElements.forEach(element => {
        element.textContent = year;
    });
    
    // Performance optimization: Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(() => {
            // Any scroll-based logic here
        }, 100);
    });
    
    // Mobile menu toggle (if needed in future)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            document.querySelector('.header-nav').classList.toggle('active');
        });
    }
});

// Preload images to improve performance
const preloadImages = () => {
    const images = [
        'photo.svg'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
};

// Call preload on page load
window.addEventListener('load', () => {
    preloadImages();
    console.log('Landing page loaded successfully');
});
