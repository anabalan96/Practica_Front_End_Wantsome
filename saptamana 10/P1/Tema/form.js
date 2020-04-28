const button = document.getElementById('button');
const form = document.getElementById('form');

const user = document.getElementById('username');
const displayError = (input, text) => {
  let error = document.createElement('div');
  error.id = "error";
  let paragraphError = document.createElement('p');
  let messageError = error.appendChild(paragraphError);
  input.appendChild(error).appendChild(messageError).textContent = text;
};

button.addEventListener('click', (byUser) => {
  const userName = document.querySelector('input[name = user]').value;
  const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  const formEmail = document.getElementById('email');
  const emailInput = document.querySelector('input[name = email]').value;

  const formFirstName = document.getElementById('first-name');
  const firstName = document.querySelector('input[name = firstname]').value;
  const formLastName = document.getElementById('last-name');
  const lastName = document.querySelector('input[name = lastname]').value;

  const phone = document.querySelector('input[name = phone]').value;
  const formPhone = document.getElementById('phone');
  if (userName.length < 4 || username === " ") {
    byUser.preventDefault();
    displayError(user, 'Please enter a valid First Name');
  }

  if (!(emailInput.match(pattern))) {
    byUser.preventDefault();
    displayError(formEmail, 'Please enter a valid address');
  }

  if (!firstName) {
    byUser.preventDefault();
    displayError(formFirstName, 'Please enter a valid First Name');
  }

  if (!lastName) {
    byUser.preventDefault();
    displayError(formLastName, `Please enter a valid Last Name`);
  }

  if (phone.length < 10) {
    byUser.preventDefault();
    displayError(formPhone, `Must be at least 10 characters`);
  }

  byUser.preventDefault();

});