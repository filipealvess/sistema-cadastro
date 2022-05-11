const cards = document.querySelectorAll('.card-hover');

function toggleCardSelection(card) {
  card.classList.toggle('active-card');
}

cards.forEach(card => {
  card.addEventListener('click', () => toggleCardSelection(card));
});
