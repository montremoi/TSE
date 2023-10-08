function toggleCart() { 
    var cartVisualization = document.getElementById("cartVisualization");
    if (cartVisualization.style.display === "none" || cartVisualization.style.display === "") {
        cartVisualization.style.display = "block";
    } else {
        cartVisualization.style.display = "none";
    }
}

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
        

const cart = [];
let cartTotal = 0;

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    cartTotal += itemPrice;
    alert(` ${itemName} a été ajouté à votre panier !`);
    updateCartTotal();
    
    const cartVisualization = document.getElementById('cartVisualization');
    const newListItem = document.createElement("li");
    newListItem.textContent = `${itemName} • ${itemPrice}€`;
    cartVisualization.querySelector("ul").appendChild(newListItem);
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


