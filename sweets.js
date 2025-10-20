function toggleMenu() {
    let menu = document.querySelector(".menu_list");
    let content = document.getElementById("content");

    if (menu) {
        menu.classList.toggle("show");

        if (content) {
            if (menu.classList.contains("show")) {
                content.classList.add("shifted");
            } else {
                content.classList.remove("shifted");
            }
        }
    }
}

function navigate(page) {
    var menu = document.getElementById("menu_list");
    var content = document.getElementById("content");

    if (menu) menu.classList.remove("show");
    if (content) content.classList.remove("shifted");
}


function goToCartPage() {
    window.location.href = "cart.html";
}

// Update cart count on home page
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const countSpan = document.getElementById('cart_count');
    if (countSpan) {
        countSpan.innerText = cart.length;
    }
}


// function updateCartCount() {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const countSpan = document.createElement('span');
//     countSpan.classList.add('cart_count');
//     countSpan.innerText = cart.length;
//     document.querySelector('.cart_icon').appendChild(countSpan);
//   }



function addToCart(name, price) {

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Check if item already exists in the cart, if so, increment quantity
    let itemIndex = cart.findIndex(item => item.name === name);
    if (itemIndex >= 0) {
        cart[itemIndex].quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Display cart items on cart.html
function showCart() {

    const cartDiv = document.getElementById('cart_items');
    const cartTotalDiv = document.getElementById('cart_total');
    if (!cartDiv || !cartTotalDiv) return;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cartDiv.innerHTML = '';

    if (cart.length === 0) {
        cartDiv.innerHTML = "<p>Your cart is empty.</p>";
        cartTotalDiv.innerText = "₹ 0";
        return;
    }

    let total = 0;
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        cartDiv.innerHTML += `
            <div class="cart-item">
                <p>${item.name} - ₹${item.price} x ${item.quantity} = ₹${itemTotal} 
                <button onclick="removeFromCart(${index})">Remove</button>
                <button onclick="increaseQuantity(${index})">Add</button>
                <button onclick="decreaseQuantity(${index})">Reduce</button>
                </p>
            </div>
        `;
    });

    cartTotalDiv.innerText = `₹${total}`;
}


function increaseQuantity(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[index]) {
        cart[index].quantity += 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        showCart();
        updateCartCount();
    }
}

function decreaseQuantity(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[index] && cart[index].quantity > 1) {
        cart[index].quantity -= 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        showCart();
        updateCartCount();
    }
}


// Remove item from cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    showCart();
    updateCartCount();
}

// ✅ Single window.onload handles both cases
window.onload = function () {
    updateCartCount(); // runs on both home.html and cart.html
    showCart();        // will only execute if cart elements exist (safe)
};