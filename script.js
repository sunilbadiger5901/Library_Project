
    const cartItems = [];

function addToCart(bookName) {
  cartItems.push(bookName);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';

  cartItems.forEach(item => {
    const cartItem = document.createElement('li');
    cartItem.textContent = item;
    cartItem.className = 'cart-item';
    cartList.appendChild(cartItem);
});
}
