const loginUser = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
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


const createNewUser = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
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

// const addFavorite = async (event) => {
//   event.preventDefault();

//   const trailId = document.querySelector('favbutton that some how has trail_id in it');

//   const response = await fetch('/api/users', {
//     method: 'PUT',
//     body: JSON.stringify({ trailId }),
//     headers: { 'Content-Type': 'application/json' },
//   });

//   if (response.ok) {
//     //turn like button green or fill in heart
//   }
// }

document
  .querySelector('#sign-up')
  .addEventListener('submit', createNewUser);

document
  .querySelector('#login')
  .addEventListener('submit', loginUser);