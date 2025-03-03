let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    totalPrice += productPrice;
    document.getElementById("cart-count").textContent = cart.length;
    updateCart();
}

function toggleCart() {
    const cartSection = document.getElementById("cart-section");
    cartSection.style.display = cartSection.style.display === "none" ? "block" : "none";
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price} грн`;
        cartItems.appendChild(li);
    });
    document.getElementById("total-price").textContent = totalPrice;
}

function clearCart() {
    cart = [];
    totalPrice = 0;
    document.getElementById("cart-count").textContent = 0;
    updateCart();
}

function checkout() {
    if (cart.length === 0) {
        alert("Ваш кошик порожній. Додайте товари перед оформленням покупки.");
        return;
    }
    alert("Дякуємо за покупку! Ваше замовлення успішно оформлене.");
    clearCart();
}
