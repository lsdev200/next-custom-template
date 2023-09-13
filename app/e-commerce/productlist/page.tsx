"use client";
import ProductCard from "@/app/components/SidebarComponents/productcard";
import React from "react";
interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const page = () => {
  const product: Product = {
    id: 1,
    name: "Example Product",
    price: "$9.99",
    image: "/assets/img/event-star-760-570.jpg",
  };
  const handleAddToCart = (product: Product): void => {};
  return (
    <div className="w-full h-full flex flex-wrap justify-center items-center">
      <ProductCard product={product} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default page;
