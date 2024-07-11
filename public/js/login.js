const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        const data = await response.json();
        // Assuming the API returns a token or user data upon successful login
        // Store the token or user data in localStorage or sessionStorage
        localStorage.setItem('token', data.token); // Example: storing token in localStorage

        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Failed to log in. Please try again.');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        const data = await response.json();
        // Assuming the API returns a token or user data upon successful signup
        // Store the token or user data in localStorage or sessionStorage
        localStorage.setItem('token', data.token); // Example: storing token in localStorage

        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Failed to sign up. Please try again.');
    }
  }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);