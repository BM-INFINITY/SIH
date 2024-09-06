document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            // Simulate login success
            M.toast({ html: 'Login successful!', classes: 'green' });
            // Redirect to main page
            window.location.href = 'index.html'; // Adjust the path if needed
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();
            // Simulate registration success
            M.toast({ html: 'Registration successful!', classes: 'green' });
            // Redirect to login page
            window.location.href = 'login.html'; // Adjust the path if needed
        });
    }
});
