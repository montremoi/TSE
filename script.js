 document.addEventListener('DOMContentLoaded', function () {
        const showMoreButtons = document.querySelectorAll('#showMoreButton');
        
        showMoreButtons.forEach(button => {
            button.addEventListener('click', function () {
                const infosParagraph = this.parentElement.querySelector('.infos');
                
                if (infosParagraph.style.display === 'none' || infosParagraph.style.display === '') {
                    infosParagraph.style.display = 'block';
                    this.textContent = '-';
                    infosParagraph.scrollIntoView({ behavior: 'smooth' });
                } else {
                    infosParagraph.style.display = 'none';
                    this.textContent = '+';
                }
            });
        });
    });