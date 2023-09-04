"use client";

import React, { useState } from "react";

interface ProductFiltersProps {
  onFilterChange: (filters: Filters) => void;
}

interface Filters {
  sortBy: string;
  priceRange: number[];
  category: string[];
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<Filters>({
    sortBy: "price-asc",
    priceRange: [0, 100],
    category: [],
  });

  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      sortBy: event.target.value,
    }));
  };

  const handlePriceRangeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: [0, parseInt(event.target.value, 10)],
    }));
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: checked
        ? [...prevFilters.category, value]
        : prevFilters.category.filter((item) => item !== value),
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      sortBy: "price-asc",
      priceRange: [0, 100],
      category: [],
    });
  };

  const applyFilters = () => {
    onFilterChange(filters);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-2">Filters</h3>
      <div className="mb-4">
        <label className="block font-semibold">Sort By</label>
        <select
          name="sortBy"
          value={filters.sortBy}
          onChange={handleSortByChange}
          className="bg-gray-200 p-2 rounded w-full focus:outline-none"
        >
          <option value="price-asc">Price - Low to High</option>
          <option value="price-desc">Price - High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block font-semibold">Price Range</label>
        <input
          type="range"
          name="priceRange"
          min={0}
          max={100}
          value={filters.priceRange[1]}
          onChange={handlePriceRangeChange}
          className="w-full"
        />
        <div className="flex justify-between text-gray-600">
          <span>$0</span>
          <span>${filters.priceRange[1]}</span>
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-semibold">Category</label>
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="category"
              value="Electronics"
              checked={filters.category.includes("Electronics")}
              onChange={handleCategoryChange}
              className="mr-2"
            />
            Electronics
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="category"
              value="Clothing"
              checked={filters.category.includes("Clothing")}
              onChange={handleCategoryChange}
              className="mr-2"
            />
            Clothing
          </label>
          {/* Add more categories as needed */}
        </div>
      </div>
      <div className="flex justify-between">
        <button
          onClick={applyFilters}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full w-1/2"
        >
          Apply Filters
        </button>
        <button
          onClick={handleResetFilters}
          className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-semibold py-2 px-4 rounded-full w-1/2"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default ProductFilters;
