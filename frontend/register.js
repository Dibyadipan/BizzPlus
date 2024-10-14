document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const companyName = document.getElementById('company-name').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Simple form validation
    if (companyName && username && password && email && /^\d{10}$/.test(phone)) {
        alert('Registration successful');
    } else {
        alert('Please fill in all fields with valid information. Phone number must be 10 digits.');
    }
});



