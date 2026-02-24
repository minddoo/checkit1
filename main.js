
document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('header nav ul');

    if (hamburger && navUl) {
        hamburger.addEventListener('click', () => {
            navUl.classList.toggle('is-active');
        });
    }

    // Language switcher
    const langButtons = document.querySelectorAll('.lang-switcher button');
    if (langButtons.length > 0) {
        langButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                langButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to the clicked button
                button.classList.add('active');
                
                // You can add language changing logic here later
                const selectedLang = button.getAttribute('data-lang');
                console.log(`Language changed to: ${selectedLang}`);
            });
        });
    }

    console.log("CHECKIT scripts loaded successfully.");
});
