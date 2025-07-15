const productsContainer = document.getElementById("products-container");

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

    `<div class="product">${name} - Rs. ${price} <button class="addBtn">Add to cart</button></div>`
  );
});
