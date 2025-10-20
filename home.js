// function toggleMenu() {
//     const menu = document.querySelector(".menu_list");
//     if (menu) {
//         menu.classList.toggle("show");
//     }
// }


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


// function navigate(page) {
//     let menu = document.getElementById(".menu_list");
//     let content = document.getElementById("content");

//     if (menu) menu.classList.remove("show");
//     if (content) content.classList.remove("shifted");
// }


$(document).ready(function () {

    $("#save_information_order_btn").click(function (event) {

        event.preventDefault();

        let naming = $("#full_naming").val();
        let numbering = $("#phone_numbering").val();
        let emailing = $("#email_iding").val();
        let pining = $("#pin_coding").val();
        let addressing = $("#order_addressing").val();

        if (naming === "" || numbering === "" || emailing === "" || pining === "" || addressing === "") {
            alert("Please fill all the details.");
            return false;
        }


        else if (!/^\d{10}$/.test(numbering)) {
            alert("Please Enter the 10 digit mobile number Only.");
            return false;
        }


        else if (!/^\d{6}$/.test(pining)) {
            alert("Please Enter the 6 digit Pin Code Only.")
            return false;
        }

        else {

            localStorage.setItem("Full_Name", naming);
            localStorage.setItem("Mobile_Number", numbering);
            localStorage.setItem("Email_Id", emailing);
            localStorage.setItem("Addressing", addressing);
            localStorage.setItem("Pin_Code", pining);

            alert("Your information is saved.\nThank You for giving your information.");

            return false;

        }

    });


    if (localStorage.getItem("Mobile_Number")) {
        $("#full_naming").val(localStorage.getItem("Full_Name"));

        $("#phone_numbering").val(localStorage.getItem("Mobile_Number"));

        $("#email_iding").val(localStorage.getItem("Email_Id"));

        $("#pin_coding").val(localStorage.getItem("Pin_Code"));

        $("#order_addressing").val(localStorage.getItem("Addressing"));
    }

});


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

    cartTotalDiv.innerText = `₹${total.toFixed(2)}`;
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





















// Arrow slide for images is below:

// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }


// Animation slide for images is below:

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 4000);
// }