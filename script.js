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