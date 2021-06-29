const loginUser = (event) => {
  event.preventDefault();

  const email = document.querySelector('#emailfield').nodeValue.trim();
  const password = document.querySelector('#passwordfield').nodeValue.trim();

  if (email && password) {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};


const createNewUser = (event) => {
  event.preventDefault();

  const username = document.querySelector('#usernamefield-signup').value.trim();
  const email = document.querySelector('#emailfield-signup').value.trim();
  const password = document.querySelector('#passwordfield-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};