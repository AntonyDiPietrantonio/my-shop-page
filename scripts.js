document.addEventListener('DOMContentLoaded', () => {
  const products = [
    { name: 'Product 1', price: 29.99 },
    { name: 'Product 2', price: 39.99 },
    { name: 'Product 3', price: 49.99 },
  ];

  const productsContainer = document.getElementById('products');
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `<h2>${product.name}</h2><p>$${product.price.toFixed(2)}</p>`;
    productsContainer.appendChild(productDiv);
  });
});
