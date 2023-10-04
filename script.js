const showMoreButton = document.getElementById('showMoreButton');
        const content = document.getElementById('infos');

        let isContentVisible = false;

        toggleButton.addEventListener('click', function() {
            if (isContentVisible) {
                infos.style.display = 'none';
                showMorebutton.textContent = '+';
            } else {
                infos.style.display = 'block';
                showMoreButton.textContent = '-';
            }
            isContentVisible = !isContentVisible;
        });