//window.alert("2")
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
    var infos1 = document.getElementById('infos1');

    showMoreButton.addEventListener('click', function() {
        if (infos1.style.display === 'none' || infos1.style.display === '') {
            infos1.style.display = 'block';
            showMoreButton.textContent = '-';
            infos1.scrollIntoView({ behavior: 'smooth' });
        } else {
            infos1.style.display = 'none';
        }
    });
});
