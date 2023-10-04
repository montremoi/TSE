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


document.addEventListener('DOMContentLoaded', 
    function showMoreLess() {
    var showMoreLess = document.getElementById('showMoreButton1'); 
    if (.style.display === 'none' || .style.display === '') {
        .style.display = 'block';
    } else {
        .style.display = 'none';
    }
}

