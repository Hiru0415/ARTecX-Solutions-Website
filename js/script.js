document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Form submit 

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || subject === '' || message === '') {
        alert('Please fill in all fields!');
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        alert('Please enter a valid email address!');
        return;
    }

    // Success message 
    alert(`Thank you, ${name}! Your message has been sent successfully.\n\nWe will get back to you soon.`);

    // Form clear 
    this.reset();
});