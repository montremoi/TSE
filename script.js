const showMoreButtons = document.querySelectorAll('.showMoreButton');
const infosElements = document.querySelectorAll('.infos');

  showMoreButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
      if (infosElements[index].style.display === 'block') {
        infosElements[index].style.display = 'none';
        button.textContent = '+';
      } else {
        infosElements[index].style.display = 'block';
        button.textContent = '-';
      }
    });
  });
        
const acheterLink = document.getElementById('acheter-link');
const featuredWatchesSection = document.getElementById('featured-watches');

acheterLink.addEventListener('click', function (e) {
    e.preventDefault(); 
    featuredWatchesSection.scrollIntoView({ behavior: 'smooth' });
});
