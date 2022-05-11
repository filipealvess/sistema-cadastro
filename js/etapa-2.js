const cards = document.querySelectorAll('.card-hover');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active-card');
  });
});
