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
