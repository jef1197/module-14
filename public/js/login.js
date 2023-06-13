const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if ( username && password ) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if(response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  
  if ( username && password ){
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

document.querySelector('#createAccount').addEventListener('click', () => {
  let loginForm = document.querySelector('.login-form');
  let signup = document.querySelector('.signup-form');
  loginForm.classList.add('hidden');
  signup.classList.remove('hidden');
})

document.querySelector('#loginAccount').addEventListener('click', () => {
  let loginForm = document.querySelector('.login-form');
  let signup = document.querySelector('.signup-form');
  loginForm.classList.remove('hidden');
  signup.classList.add('hidden');
})