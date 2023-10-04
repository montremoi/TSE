const showMoreButton = document.getElementById('showMoreButton');
        const infos = document.getElementById('infos');

        let isContentVisible = false;

        showMoreButton.addEventListener('click', function() {
            if (isContentVisible) {
                infos.style.display = 'none';
                showMoreButton.textContent = '+';
            } else {
                infos.style.display = 'block';
                showMoreButton.textContent = '-';
            }
            isContentVisible = !isContentVisible;
        });
        
const acheterLink = document.getElementById('acheter-link');
const featuredWatchesSection = document.getElementById('featured-watches');

acheterLink.addEventListener('click', function (e) {
    e.preventDefault(); 
    featuredWatchesSection.scrollIntoView({ behavior: 'smooth' });
});
