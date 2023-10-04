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
        

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
