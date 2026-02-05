// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Typing effect
    const typingText = document.getElementById('typing-text');
    const words = ['Web Developer', 'Frontend Developer', 'UI/UX Designer', 'Problem Solver'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typingSpeed = 1500; // Pause at end of word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500; // Pause before typing next word
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Start typing effect
    setTimeout(type, 1000);
    
    // Navigation toggle
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Project filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.classList.add('show');
                    }, 50);
                } else {
                    card.classList.remove('show');
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-progress');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (barPosition < screenPosition) {
                bar.classList.add('animate');
            }
        });
    }
    
    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top');
    
    function toggleBackToTopBtn() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Scroll animations
    function revealElements() {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('active');
            }
        });
        
        animateSkillBars();
        toggleBackToTopBtn();
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', revealElements);
    
    // Initial call to reveal elements
    revealElements();
    
    // Form submission
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        setTimeout(() => {
            // Show success message
            alert(`Thank you, ${name}! Your message has been sent successfully.`);
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }, 1500);
    });
    
    // Animated background circles
    const circles = document.querySelectorAll('.gradient-circle');
    
    function animateCircles() {
        circles.forEach((circle, index) => {
            const randomX = Math.random() * 10 - 5;
            const randomY = Math.random() * 10 - 5;
            
            circle.style.transform = `translate(${randomX}px, ${randomY}px)`;
            
            setTimeout(() => {
                circle.style.transition = 'transform 8s ease-in-out';
            }, 100);
        });
        
        setTimeout(animateCircles, 8000);
    }
    
    animateCircles();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Parallax effect
window.addEventListener('mousemove', function(e) {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    document.querySelectorAll('.gradient-circle').forEach(circle => {
        const offsetX = (mouseX - 0.5) * 20;
        const offsetY = (mouseY - 0.5) * 20;
        
        circle.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
    
    document.querySelector('.hero-image').style.transform = `translate(${(mouseX - 0.5) * -10}px, ${(mouseY - 0.5) * -10}px)`;
});

// Add CSS for animations
document.head.insertAdjacentHTML('beforeend', `)`);
