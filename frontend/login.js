console.log('Script loaded!');

document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('Login form submitted');

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    console.log(`Username: ${username}, Password: ${password}`);

    try {
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        console.log('Response status:', response.status);
        const data = await response.json();
        console.log('Response data:', data);

        if (response.ok) {
            alert(data.message);
        } else {
            console.error('Login failed:', data.message);
            alert(`Invalid username or password: ${data.message}`);
        }
    } catch (error) {
        console.error('Error during login:', error);
        alert('Error during login');
    }
});
