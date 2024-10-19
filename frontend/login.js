console.log('Script loaded!'); // Ensure the script is loading

document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('Login form submitted'); // Check if form submission is captured

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    console.log(`Username: ${username}, Password: ${password}`); // Verify form values

    try {
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json(); // Attempt to parse the response JSON

        if (response.ok) {
            alert('Login successful');
        } else {
            console.error('Login failed:', data);
            alert('Invalid username or password');
        }
    } catch (error) {
        console.error('Error during login:', error);
        alert('Error during login');
    }
});
