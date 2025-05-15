const products = [
    { name: "Smartphone", category: "electronics", price: 499, rating: 4.5 },
    { name: "Laptop", category: "electronics", price: 899, rating: 4.8 },
    { name: "Novel Book", category: "books", price: 19, rating: 4.3 },
    { name: "T-shirt", category: "clothing", price: 25, rating: 4.0 },
    { name: "Headphones", category: "electronics", price: 59, rating: 4.1 },
    { name: "Textbook", category: "books", price: 75, rating: 4.7 },
    { name: "Jacket", category: "clothing", price: 120, rating: 4.6 }
  ];
  
  function renderProducts(items) {
    const list = document.getElementById("productList");
    list.innerHTML = "";
  
    items.forEach(product => {
      const card = document.createElement("div");
      card.className = "product";
  
      card.innerHTML = `
        <h3>${product.name}</h3>
        <p>Category: ${product.category}</p>
        <p>Price: $${product.price}</p>
        <p>Rating: ⭐ ${product.rating}</p>
      `;
  
      list.appendChild(card);
    });
  }
  
  function applyFilters() {
    const category = document.getElementById("categoryFilter").value;
    const sortBy = document.getElementById("sortBy").value;
  
    let filtered = [...products];
  
    if (category !== "all") {
      filtered = filtered.filter(p => p.category === category);
    }
  
    switch (sortBy) {
      case "priceAsc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "ratingDesc":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
    }
  
    renderProducts(filtered);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    renderProducts(products);
  });
  