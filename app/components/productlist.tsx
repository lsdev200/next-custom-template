"use client";

// components/ProductList.tsx
import React, { useState } from "react";

// Sample product data
const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$19.99",
    rating: 4.5,
    image: "/product1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$29.99",
    rating: 4.2,
    image: "/product2.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$24.99",
    rating: 4.7,
    image: "/product3.jpg",
  },
  // Add more product entries as needed
];

const ProductList: React.FC = () => {
  const [sortBy, setSortBy] = useState("price"); // Default sorting by price
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Function to handle sorting
  const handleSort = (property: string) => {
    setSortBy(property);
    const sortedProducts = [...filteredProducts].sort((a, b) =>
      property === "price"
        ? parseFloat((a as any)[property].substring(1)) -
          parseFloat((b as any)[property].substring(1))
        : (a as any)[property] - (b as any)[property]
    );
    setFilteredProducts(sortedProducts);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Product List</h2>
        <div className="flex items-center">
          <label className="mr-2">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => handleSort(e.target.value)}
            className="bg-gray-200 p-2 rounded focus:outline-none"
          >
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white w-64 p-4 rounded-lg shadow-md"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover mb-2 rounded-lg"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">
                ★ {product.rating.toFixed(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

// ! TODO:
// ploace image is herer
