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
const watchCards = document.querySelectorAll('.watch-card');

showMoreButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        if (infosElements[index].style.display === 'block') {
            infosElements[index].style.display = 'none';
            watchCards[index].style.height = 'auto';
            button.textContent = '+';
        } else {
            infosElements[index].style.display = 'block';
            watchCards[index].style.height = 'auto';
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
    const existingItem = cart.find(item => item.name === itemName);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: itemName, pricePerItem: itemPrice, quantity: 1 });
    }

    cartTotal += itemPrice;
    updateCartTotal();
    updateCartVisual();

    
    alert(`${itemName} • ${itemPrice}€ a été ajouté au panier !`);
}

function updateCartVisual() {
    const cartVisualization = document.getElementById('cartVisualization');
    const cartItemsList = cartVisualization.querySelector('ul');
    cartItemsList.innerHTML = '';

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} • ${item.pricePerItem}€ x${item.quantity}`;
        /*listItem.style.fontFamily ="'Outfit', sans-serif";
        listItem.style.fontWeight ="bold";*/
        const addButton = document.createElement('button');
        addButton.textContent = '+1';
        addButton.addEventListener('click', () => addToCart(item.name, item.pricePerItem));
        addButton.style.background = 'rgb(76,194,128)';
        addButton.style.background = 'linear-gradient(90deg, rgba(76,194,128,1) 0%, rgba(75,196,126,1) 50%, rgba(73,207,99,1) 100%)';
        addButton.style.fontFamily = "'Space Mono', monospace";
        const removeButton = document.createElement('button');
        removeButton.textContent = '-1';
        removeButton.addEventListener('click', () => removeOneFromCart(item.name, item.pricePerItem));
        removeButton.style.background = 'rgb(255,94,106)';
        removeButton.style.background = 'linear-gradient(180deg, rgba(255,94,106,1) 0%, rgba(255,32,106,1) 50%, rgba(233,33,33,1) 100%)';
        removeButton.style.fontFamily = "'Space Mono', monospace";
        listItem.appendChild(addButton);
        listItem.appendChild(removeButton);

        cartItemsList.appendChild(listItem);
    });
}

function removeOneFromCart(itemName, itemPrice) {
    const existingItem = cart.find(item => item.name === itemName);

    if (existingItem) {
        if (existingItem.quantity > 1) {
            existingItem.quantity -= 1;
        } else {
            const itemIndex = cart.indexOf(existingItem);
            cart.splice(itemIndex, 1);
        }

        cartTotal -= itemPrice;
        updateCartTotal();
        updateCartVisual();
    }
}

function updateCartTotal() {
    const cartTotalElements = document.querySelectorAll('.cartTotal');
    
    cartTotalElements.forEach(cartTotalElement => {
        cartTotalElement.textContent = cartTotal;
    });
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

const finalizeOrderButton = document.getElementById('finalizeOrder');
finalizeOrderButton.addEventListener('click', () => {
    alert("Commande finalisée ! Merci pour votre achat.");
});
