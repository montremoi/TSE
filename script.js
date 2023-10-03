  document.getElementById('showMoreButton').addEventListener('click', function() {
  var hiddenElement = document.getElementById('infos');
  var watchCard = document.querySelector('.watch-card');
  var showMoreButton = document.getElementById('showMoreButton');

  if (hiddenElement.style.display === 'none' || hiddenElement.style.display === '') {
    hiddenElement.style.display = 'block';
    watchCard.style.height = 'auto';
    showMoreButton.textContent = '-';
    hiddenElement.scrollIntoView({ behavior: 'smooth' });
  } else {
    hiddenElement.style.display = 'none';
    watchCard.style.height = 'auto';
    showMoreButton.textContent = '+';
  }
});