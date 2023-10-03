document.addEventListener('DOMContentLoaded', function () {
        const buttons = document.querySelectorAll('.showMoreButton');

        buttons.forEach(button => {
            button.addEventListener('click', function () {
                const targetId = this.getAttribute('data-target');
                const target = document.getElementById(targetId);
                const expanded = this.getAttribute('data-expanded');

                if (expanded === 'false') {
                    // Expand and scroll to the information
                    target.style.display = 'block';
                    this.textContent = '-';
                    this.setAttribute('data-expanded', 'true');
                    scrollTo(target);
                } else {
                    // Collapse the information
                    target.style.display = 'none';
                    this.textContent = '+';
                    this.setAttribute('data-expanded', 'false');
                }
            });
        });

        function scrollTo(element) {
            window.scroll({
                behavior: 'smooth',
                left: 0,
                top: element.offsetTop - 20, // Adjust the offset as needed
            });
        }
    });
