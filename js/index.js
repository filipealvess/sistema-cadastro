const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const domainInput = document.querySelector('#domain');
const phoneCountryInput = document.querySelector('#phone-country');
const phoneDDDInput = document.querySelector('#phone-ddd');
const phoneNumberInput = document.querySelector('#phone-number');
const receiveNewsInput = document.querySelector('#receive-news');

function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function focusInNextInput(node) {
  const container = node.parentElement;
  const nextInput = container.nextElementSibling.querySelector('input');

  nextInput.focus();
}

function handlePhoneCountryChange({ target }) {
  const { value } = target;

  target.value = value.replace(/\D/g, '')
    .replace(/^(\d)/, '+$1')
    .replace(/(\+\d{2})\d+?$/, '$1');

  if (value.length === 3) {
    focusInNextInput(target);
  }
}

function handlePhoneDDDChange({ target }) {
  const { value } = target;

  target.value = value.replace(/\D/g, '')
    .replace(/^(\d)/, '($1')
    .replace(/^(\(\d{2})/, '$1)')
    .replace(/(\(\d{2}\))\d+?$/, '$1');

  if (target.value.length === 4) {
    focusInNextInput(target);
  }
}

function handlePhoneNumberChange({ target }) {
  const { value } = target;

  target.value = value.replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
}

function handleFormSubmit(event) {
  event.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;
  const domain = domainInput.value;
  const phoneCountry = phoneCountryInput.value;
  const phoneDDD = phoneDDDInput.value;
  const phoneNumber = phoneNumberInput.value;
  const receiveNews = receiveNewsInput.checked;

  saveData('user', {
    name,
    email,
    domain,
    phone: `${phoneCountry} ${phoneDDD} ${phoneNumber}`,
    receiveNews
  });

  window.location.replace('./etapa-2.html');
}
