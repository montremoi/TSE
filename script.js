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


document.addEventListener('DOMContentLoaded', function() {
    var showMoreButton = document.getElementById('showMoreButton1');
    var infos = document.getElementById('infos');

    showMoreButton.addEventListener('click', function() {
        if (infos.style.display === 'none' || infos.style.display === '') {
            infos.style.display = 'block';
            showMoreButton.textContent = '-';
            infos.scrollIntoView({ behavior: 'smooth' });
        } else {
            infos.style.display = 'none';
        }
    });
});
