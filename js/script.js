const toTop = document.querySelector('.to-top');

// fixed knop voor navigatie naar boven
toTop.addEventListener('click', (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
