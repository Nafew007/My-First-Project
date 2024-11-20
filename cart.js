// Handling the quantity update for products in the "Latest Products" section
document.querySelectorAll('.box').forEach((box, index) => {
    const quantityButton = box.querySelector('.quantity-button');
    const decreaseButton = quantityButton.querySelector('.bi-cart-dash');
    const increaseButton = quantityButton.querySelector('.bi-cart-plus');
    const quantityDisplay = quantityButton.querySelector('.price-quantity');

    let quantity = 0;

    decreaseButton.addEventListener('click', () => {
        if (quantity > 0) {
            quantity--;
            quantityDisplay.textContent = quantity;
        }
    });

    increaseButton.addEventListener('click', () => {
        quantity++;
        quantityDisplay.textContent = quantity;
    });
});

// Handling the quantity update for products in the "Featured" section
document.querySelectorAll('.featured-quantity-button').forEach((buttonContainer) => {
    const decreaseButton = buttonContainer.querySelector('.bi-cart-dash');
    const increaseButton = buttonContainer.querySelector('.bi-cart-plus');
    const quantityDisplay = buttonContainer.querySelector('.price-quantity');

    let quantity = 0;

    decreaseButton.addEventListener('click', () => {
        if (quantity > 0) {
            quantity--;
            quantityDisplay.textContent = quantity;
        }
    });

    increaseButton.addEventListener('click', () => {
        quantity++;
        quantityDisplay.textContent = quantity;
    });
});

let totalCartQuantity = 0; // Initialize total cart quantity

// Function to update the cart display
function updateCartAmountDisplay() {
    const cartAmountDisplay = document.querySelector('.cartAmount');
    cartAmountDisplay.textContent = totalCartQuantity;
}

// Handling the quantity update for products in the "Latest Products" section
document.querySelectorAll('.box').forEach((box, index) => {
    const quantityButton = box.querySelector('.quantity-button');
    const decreaseButton = quantityButton.querySelector('.bi-cart-dash');
    const increaseButton = quantityButton.querySelector('.bi-cart-plus');
    const quantityDisplay = quantityButton.querySelector('.price-quantity');

    let quantity = 0;

    decreaseButton.addEventListener('click', () => {
        if (quantity > 0) {
            quantity--;
            totalCartQuantity--;
            quantityDisplay.textContent = quantity;
            updateCartAmountDisplay(); // Update the cart amount display
        }
    });

    increaseButton.addEventListener('click', () => {
        quantity++;
        totalCartQuantity++;
        quantityDisplay.textContent = quantity;
        updateCartAmountDisplay(); // Update the cart amount display
    });
});

// Handling the quantity update for products in the "Featured" section
document.querySelectorAll('.featured-quantity-button').forEach((buttonContainer) => {
    const decreaseButton = buttonContainer.querySelector('.bi-cart-dash');
    const increaseButton = buttonContainer.querySelector('.bi-cart-plus');
    const quantityDisplay = buttonContainer.querySelector('.price-quantity');

    let quantity = 0;

    decreaseButton.addEventListener('click', () => {
        if (quantity > 0) {
            quantity--;
            totalCartQuantity--;
            quantityDisplay.textContent = quantity;
            updateCartAmountDisplay(); // Update the cart amount display
        }
    });

    increaseButton.addEventListener('click', () => {
        quantity++;
        totalCartQuantity++;
        quantityDisplay.textContent = quantity;
        updateCartAmountDisplay(); // Update the cart amount display
    });
});

