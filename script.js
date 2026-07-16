```javascript
// ================================
// Infinity Cubes V2
// script.js
// ================================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

window.addCubeToCart = addCubeToCart;
window.removeItem = removeItem;
window.placeOrder = placeOrder;
window.updateCustomPrice = updateCustomPrice;
window.submitCustomRequest = submitCustomRequest;

document.addEventListener("DOMContentLoaded", () => {
    updateCart();
    if (document.getElementById("printTime")) {
        updateCustomPrice();
    }
});

// --------------------
// ADD TO CART
// --------------------

function addCubeToCart() {

    const colour = document.getElementById("cubeColour").value;

    const quantity = parseInt(document.getElementById("cubeQuantity").value);

    if (quantity < 1) {
        alert("Quantity must be at least 1.");
        return;
    }

    cart.push({
        name: "Infinity Cube",
        colour,
        quantity,
        price: quantity * 1
    });

    saveCart();

    alert("Added to cart!");
}

// --------------------
// SAVE CART
// --------------------

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

// --------------------
// UPDATE CART
// --------------------

function updateCart() {

    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const totalPrice = document.getElementById("totalPrice");

    if (cartCount) {
        cartCount.textContent = cart.length;
    }

    if (!cartItems) return;

    if (cart.length === 0) {

        cartItems.innerHTML = "<p>Your cart is empty.</p>";

        if (totalPrice) totalPrice.textContent = "0.00";

        return;

    }

    let html = "";
    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        html += `
        <div class="order-card">

            <h4>${item.name}</h4>

            <p>🎨 ${item.colour}</p>

            <p>📦 Quantity: ${item.quantity}</p>

            <h5>£${item.price.toFixed(2)}</h5>

            <button
            class="btn btn-danger"
            onclick="removeItem(${index})">

            Remove

            </button>

        </div>
        `;

    });

    cartItems.innerHTML = html;

    if (totalPrice) {

        totalPrice.textContent = total.toFixed(2);

    }

}

// --------------------
// REMOVE ITEM
// --------------------

function removeItem(index) {

    cart.splice(index, 1);

    saveCart();

}

// --------------------
// ORDER NUMBER
// --------------------

function generateOrderNumber() {

    const today = new Date();

    const year = String(today.getFullYear()).slice(-2);

    const month = String(today.getMonth() + 1).padStart(2, "0");

    const day = String(today.getDate()).padStart(2, "0");

    const random = Math.floor(Math.random() * 9000 + 1000);

    return `IC-${year}${month}${day}-${random}`;

}

// --------------------
// PLACE ORDER
// --------------------

function placeOrder() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;

    }

    const name = document.getElementById("customerName").value.trim();
    const email = document.getElementById("customerEmail").value.trim();
    const address = document.getElementById("customerAddress").value.trim();
    const delivery = document.getElementById("deliveryMethod").value;
    const notes = document.getElementById("orderNotes").value;

    if (!name || !email || !address) {

        alert("Please complete all required fields.");

        return;

    }

    const order = {

        orderNumber: generateOrderNumber(),

        name,

        email,

        address,

        delivery,

        notes,

        cart,

        total: cart.reduce((sum, item) => sum + item.price, 0),

        status: "Pending",

        date: new Date().toLocaleString()

    };

    console.log(order);

    alert(
`Order placed!

Order Number:

${order.orderNumber}`
    );

    cart = [];

    saveCart();

    document.getElementById("customerName").value = "";
    document.getElementById("customerEmail").value = "";
    document.getElementById("customerAddress").value = "";
    document.getElementById("orderNotes").value = "";

}

// --------------------
// CUSTOM PRINT PRICE
// --------------------

function updateCustomPrice() {

    const input = document.getElementById("printTime");

    if (!input) return;

    const halfHours = parseInt(input.value) || 1;

    const price = halfHours * 0.5;

    document.getElementById("customPrice").textContent = price.toFixed(2);

}

// --------------------
// CUSTOM REQUEST
// --------------------

function submitCustomRequest() {

    const request = {

        name: document.getElementById("customName").value,

        email: document.getElementById("customEmail").value,

        address: document.getElementById("customAddress").value,

        colour: document.getElementById("customColour").value,

        material: document.getElementById("customMaterial").value,

        printTime: document.getElementById("printTime").value,

        description: document.getElementById("customDescription").value,

        requirements: document.getElementById("specialRequirements").value,

        price: document.getElementById("customPrice").textContent,

        status: "Pending",

        date: new Date().toLocaleString()

    };

    console.log(request);

    alert("Custom request submitted! Firebase integration is coming next.");

}
```
