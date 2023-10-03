  document.getElementById('showMoreButton').addEventListener('click', function() {
  var hiddenElement = document.getElementById('infos');
  var featuredWatches = document.querySelector('.featured-watches');
  var showMoreButton = document.getElementById('showMoreButton');

  if (infos.style.display === 'none' || infos.style.display === '') {
    infos.style.display = 'block';
    featuredWatches.style.height = 'auto';
    showMoreButton.textContent = '-';
    hiddenElement.scrollIntoView({ behavior: 'smooth' });
  } else {
    infos.style.display = 'none';
    featuredWatches.style.height = 'auto';
    showMoreButton.textContent = '+';
  }
});
