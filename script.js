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


document.addEventListener('DOMContentLoaded', function showMoreLess() {
    showMoreButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        window.alert('Button cliqué')
        if (infosElements[index].style.display === 'block') {
            infosElements[index].style.display = 'none';
            button.textContent = '+';
        } else {
            infosElements[index].style.display = 'block';
            button.textContent = '-';
        }
    });
});
});

