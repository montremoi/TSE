  // Get references to all "Show More" buttons and info elements
var showMoreButtons = document.querySelectorAll('.watch-card button');
var infoElements = document.querySelectorAll('.watch-card .infos');

// Add click event listeners to each "Show More" button
showMoreButtons.forEach(function(button, index) {
  button.addEventListener('click', function() {
    var hiddenElement = infoElements[index];

    if (hiddenElement.style.display === 'none' || hiddenElement.style.display === '') {
      hiddenElement.style.display = 'block';
      button.textContent = '-';
      hiddenElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      hiddenElement.style.display = 'none';
      button.textContent = '+';
    }
  });
});
