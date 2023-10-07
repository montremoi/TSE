//window.alert("2")
function toggleCart() {
    var cartVisualization = document.getElementById("cartVizualization");
    if (cartVizualization.style.display === "none" || cartVizualization.style.display === "") {
        cartVizualization.style.display = "block";
    } else {
        cartVizualization.style.display = "none";
    }
}
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


/*document.addEventListener('DOMContentLoaded', function() {
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
document.addEventListener('DOMContentLoaded', function() {
    var watchCards = document.querySelectorAll('.watch-card1');

    watchCards.forEach(function(card) {
        var showMoreButton1 = card.querySelector('.showMoreButton1');
        var infos = card.querySelector('.infos');

        showMoreButton1.addEventListener('click', function() {
            if (infos.style.display === 'none' || infos.style.display === '') {
                infos.style.display = 'block';
                showMoreButton1.textContent = '-';
                watchCards.style.height = 'auto';
                infos.scrollIntoView({ behavior: 'smooth' });
            } else {
                infos.style.display = 'none';
                watchCards.style.height = 'auto';
                showMoreButton1.textContent = '+';
            }
        });
    });
});
*//*
document.addEventListener('DOMContentLoaded', function showMoreLess() {
    var watchCard = document.querySelector('.watch-card1'); // Select the specific element

    var showMoreButton1 = watchCard.querySelector('.showMoreButton1');
    var infos = watchCard.querySelector('.infos');

    showMoreButton1.addEventListener('click', function() {
        if (infos.style.display === 'none' || infos.style.display === '') {
            infos.style.display = 'block';
            showMoreButton1.textContent = '-';
            watchCard.style.height = 'auto';
            infos.scrollIntoView({ behavior: 'smooth' });
        } else {
            infos.style.display = 'none';
            watchCard.style.height = 'auto';
            showMoreButton1.textContent = '+';
        }
    });
});
document.querySelectorAll('.showMoreButton').forEach(button => {
    button.addEventListener('click', function() {
        //const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(showMoreButton[index]);

        if (targetElement) {
            if (targetElement.style.display === 'none' || targetElement.style.display === '') {
                targetElement.style.display = 'block';
                this.textContent = '-';
                targetElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                targetElement.style.display = 'none';
                this.textContent = '+';
            }
        }
    });
});
*/
/*      
const showMoreButtons = document.querySelectorAll('.showMoreButton');
const infosElements = document.querySelectorAll('.infos');
const watchCards = document.querySelector('watch-card');
    showMoreButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            if (infosElements[index].style.display === 'block') {
                infosElements[index].style.display = 'none';
                watchCards.style.height= 'auto';
                button.textContent = '+';
                } else {
                    infosElements[index].style.display = 'block';
                    watchCards.style.height= 'auto';
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
        */
const showMoreButtons = document.querySelectorAll('.showMoreButton');
const infosElements = document.querySelectorAll('.infos');
const watchCards = document.querySelectorAll('.watch-card'); 

showMoreButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        if (infosElements[index].style.display === 'block') {
            infosElements[index].style.display = 'none';
            //watchCards[index].style.height = 'auto';
            button.textContent = '+';
        } else {
            infosElements[index].style.display = 'block';
            //watchCards[index].style.height = 'auto';
            button.textContent = '-';
        }
    });
});

const cart = [];
let cartTotal = 0;

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    cartTotal += itemPrice;
    alert(` ${itemName} a été ajouté à votre panier !`);
    updateCartTotal();
}

function updateCartTotal() {
    const cartTotalElement = document.getElementById('cartTotal');
    cartTotalElement.textContent = cartTotal;
}

document.getElementById('buyButton1').addEventListener('click', function() {
    addToCart('Le modèle A.H', 250);
});

document.getElementById('buyButton2').addEventListener('click', function() {
    addToCart('Le modèle F.R.B', 250);
});

document.getElementById('buyButton3').addEventListener('click', function() {
    addToCart('Le modèle Pro Max', 500);
});


