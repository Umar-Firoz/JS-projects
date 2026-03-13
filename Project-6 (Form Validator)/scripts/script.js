const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirm = document.querySelector('#confirmPassword');

const sumbit = document.querySelector('.sumbit-btn');

sumbit.addEventListener('click', () => {
  const usernameInput = username.value;
  const emailValue = email.value;
  if (usernameInput.length < 8) {
    username.classList.remove('focus:ring-green-500', 'focus:border-green-500');
    username.classList.add('ring-2', 'ring-red-500', 'border-red-500');
    document.querySelector('#usernameError').classList.remove('hidden');
    console.log('hello');
  } else {
    username.classList.add('focus:ring-green-500', 'focus:border-green-500');
    username.classList.remove('ring-2', 'ring-red-500', 'border-red-500');
    document.querySelector('#usernameError').classList.add('hidden');
  }
  if (!email.checkValidity()) {
    email.classList.remove('focus:ring-green-500', 'focus:border-green-500');
    email.classList.add('ring-2', 'ring-red-500', 'border-red-500');
    document.querySelector('#emailError').classList.remove('hidden');
    console.log('hello');
  } else {
    email.classList.add('focus:ring-green-500', 'focus:border-green-500');
    email.classList.remove('ring-2', 'ring-red-500', 'border-red-500');
    document.querySelector('#emailError').classList.add('hidden');
  }
});
