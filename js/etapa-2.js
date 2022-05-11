const cards = document.querySelectorAll('.card-hover');
const anotherSegmentInput = document.querySelector('[name="another-segment"]');

function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function toggleCardSelection(card) {
  card.classList.toggle('active-card');
}

function handleFormSubmit(event) {
  event.preventDefault();

  const cardList = Array.from(cards);
  const activeCards = cardList.filter(card => card.classList.contains('active-card'));
  const anotherSegment = anotherSegmentInput.value;
  const nothingSelected = activeCards.length === 0 && anotherSegment.length === 0;

  if (nothingSelected) {
    anotherSegmentInput.focus();
    return;
  }

  const segments = activeCards.map(card => {
    const segment = card.querySelector('p').innerText;
    return segment;
  });

  anotherSegment && segments.push(anotherSegment);
  saveData('segments', segments);
  window.location.replace('/etapa-3.html');
}

cards.forEach(card => {
  card.addEventListener('click', () => toggleCardSelection(card));
});
