function showGreeting(title) {
    console.log(title);
}

showGreeting("bài 1");
const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
  { id: 2, name: "Phone", category: "Electronics", price: 800 },
  { id: 3, name: "Shirt", category: "Clothing", price: 40 },
  { id: 4, name: "Shoes", category: "Clothing", price: 60 },
  { id: 5, name: "Headphones", category: "Electronics", price: 150 },
];
function filterElectronics(products) {
  return products.filter(product => product.category === "Electronics");
}

console.log(filterElectronics(products));   

showGreeting("bài 2");
showGreeting("bài 3");
showGreeting("bài 4");
showGreeting("bài 5");
showGreeting("bài 6");
showGreeting("bài 7");
showGreeting("bài 8");
showGreeting("bài 9");
