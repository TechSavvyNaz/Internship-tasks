// Smooth Scrolling
function scrollToSection(section) {
    document.querySelector(section).scrollIntoView({
        behavior: 'smooth'
    });
}

// Form Validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.querySelector('input[placeholder="Name"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const message = document.querySelector('textarea[placeholder="Message"]').value;

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    alert('Thank you for your message!');
});
