document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simulating form submission (you can replace this with actual form handling)
    const responseMessage = alert('Thank you, ${name}! We have received your message.');
    document.getElementById('response-message').innerText = responseMessage;

    // Clear form fields
    this.reset();
});
