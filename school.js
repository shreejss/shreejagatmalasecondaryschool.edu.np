// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.md\\:hidden button');
    const navMenu = document.querySelector('nav');
    
    menuButton.addEventListener('click', () => {
        navMenu.classList.toggle('hidden');
        navMenu.classList.toggle('flex');
        navMenu.classList.toggle('flex-col');
        navMenu.classList.toggle('absolute');
        navMenu.classList.toggle('top-16');
        navMenu.classList.toggle('left-0');
        navMenu.classList.toggle('w-full');
        navMenu.classList.toggle('bg-white');
        navMenu.classList.toggle('shadow-md');
        navMenu.classList.toggle('p-4');
    });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for sticky header
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Validation
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !phone || !subject || !message) {
            alert('Please fill out all fields.');
            return;
        }

        if (!/^[a-zA-Z\s]+$/.test(name)) {
            alert('Name should contain only letters and spaces.');
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!/^\+?\d{10,12}$/.test(phone)) {
            alert('Please enter a valid phone number (10-12 digits).');
            return;
        }

        alert('Message sent successfully!'); // Simulate form submission
        contactForm.reset();
    });
}

// Scroll-to-Top Button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.classList.add('fixed', 'bottom-8', 'right-8', 'bg-blue-600', 'text-white', 'p-3', 'rounded-full', 'shadow-lg', 'hover:bg-blue-700', 'transition', 'opacity-0', 'hidden');
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.remove('opacity-0', 'hidden');
        scrollTopBtn.classList.add('opacity-100');
    } else {
        scrollTopBtn.classList.add('opacity-0');
        setTimeout(() => scrollTopBtn.classList.add('hidden'), 300);
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Enhance Language Toggle
function toggleLanguage() {
    const englishElements = document.querySelectorAll('.english');
    const nepaliElements = document.querySelectorAll('.nepali');
    const isEnglish = englishElements[0].style.display !== 'none';

    englishElements.forEach(el => {
        el.style.display = isEnglish ? 'none' : 'block';
    });

    nepaliElements.forEach(el => {
        el.style.display = isEnglish ? 'block' : 'none';
    });

    // Adjust layout for Nepali font if needed
    document.body.style.fontFamily = isEnglish ? "'Poppins', sans-serif" : "'Poppins', sans-serif";
}

// Initialize language display
document.addEventListener('DOMContentLoaded', () => {
    const nepaliElements = document.querySelectorAll('.nepali');
    nepaliElements.forEach(el => {
        el.style.display = 'none';
    });
});
