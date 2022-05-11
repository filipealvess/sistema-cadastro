const userName = document.querySelector('#user-name');

function navigateTo(path) {
  window.location.replace(path);
}

function updateUserName() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    navigateTo('./index.html');
  }

  if (userName) {
    userName.innerText = user.name;
  }
}

updateUserName();
