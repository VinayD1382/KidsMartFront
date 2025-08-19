let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;
  displayCart();
}

function displayCart() {
  let cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  
  cart.forEach((product) => {
    let li = document.createElement("li");
    li.textContent = `${product.item} - ₹${product.price}`;
    cartItems.appendChild(li);
  });

  document.getElementById("total").textContent = `Total: ₹${total}`;
}
