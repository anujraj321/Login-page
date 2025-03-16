document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Simple validation (for demonstration purposes)
    if (username === 'anuj' && password === 'password') {
        message.textContent = 'Login successful!';
        message.style.color = 'green';
        // Redirect or perform further actions here
    } else {
        message.textContent = 'Invalid username or password';
    }
});
