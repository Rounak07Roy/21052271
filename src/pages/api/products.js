

const products = [
  { id: 1, name: 'Product 1', company: 'Company A', category: 'Category A', price: 100, rating: 4.5, discount: 10, availability: true },
  { id: 2, name: 'Product 2', company: 'Company B', category: 'Category B', price: 200, rating: 4.0, discount: 15, availability: false },

];

export function getAllProducts() {
  return products;
}

export function getProductById(id) {
  return products.find(product => product.id === parseInt(id));
}
