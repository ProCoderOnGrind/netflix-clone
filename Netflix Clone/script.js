// FAQ Accordion
const accordionItems = document.querySelectorAll('.accordion li');

accordionItems.forEach(item => {
    const question = item.querySelector('.question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all items
        accordionItems.forEach(accItem => accItem.classList.remove('active'));
        
        // Toggle current item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Email Validation
const emailForm = document.querySelector('.email-signup');
const emailInput = document.querySelector('.email-signup input');

emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        emailInput.style.borderColor = '#ffa00a';
        emailInput.setAttribute('placeholder', 'Please enter a valid email address');
    } else {
        emailInput.style.borderColor = '#5fa53f';
        // Submit form here
    }
});
const posterGrid = document.querySelector('.poster-grid');
const scrollBtns = document.querySelectorAll('.scroll-btn');

scrollBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const scrollAmount = btn.classList.contains('prev') ? -300 : 300;
        posterGrid.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});