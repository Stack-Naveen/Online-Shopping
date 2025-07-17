const productsContainer = document.getElementById("products-container");
const cartContainer = document.getElementById("cart-container");
const countProducts = document.getElementById("countProducts");
const sortProducts = document.getElementById("sort");
const clearCart = document.getElementById("clear");

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
  },
  {
    id: 2,
    name: "Phone",
    price: 20000,
  },
  {
    id: 3,
    name: "Tablet",
    price: 5000,
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 1000,
  },
  {
    id: 5,
    name: "Headphones",
    price: 500,
  },
];

products.forEach((product) => {
  const { id, name, price } = product;
  productsContainer.insertAdjacentHTML(
    "beforeend",
    `<div class="product">${name} - Rs. ${price} <button onclick="addToCart(${id})">Add to cart</button></div>`
  );
});
const myCart = [];
function addToCart(id) {
  const isAvailable = myCart.some((product) => {
    return product.id === id;
  });
  console.log(isAvailable);
  if (isAvailable) {
    alert(`Item already added`);
    return;
  }

  console.log("click working", id);
  const productToAdd = products.find((item) => {
    return item.id === id;
  });
  console.log(productToAdd);
  myCart.push(productToAdd);
  renderCartDetails();
}
function renderCartDetails() {
  cartContainer.innerHTML = "";
  myCart.forEach((item) => {
    const { id, name, price } = item;
    cartContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="product">${name} - Rs. ${price} <button onclick="removeFromCart(${id})">Remove</button></div>`
    );
  });
  const totalPrice = myCart.reduce((prev, current) => {
    return prev + current.price;
  }, 0);
  countProducts.textContent = `Rs. ${totalPrice}`;
}

function removeFromCart(id) {
  const productIndex = myCart.findIndex((item) => {
    return item.id === id;
  });
  myCart.splice(productIndex, 1);
  renderCartDetails();
}

/* sortProducts.addEventListener("click", () => {}); */

const check = clearCart.addEventListener("click", () => {
  console.log("ok");

  console.log(check);
  renderCartDetails();
});
clearCart.addEventListener("click", () => {
  console.log("check");
  myCart.length = 0;
  renderCartDetails();
});
