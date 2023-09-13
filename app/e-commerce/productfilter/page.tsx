"use client";
import ProductFilters from "@/app/components/SidebarComponents/productfilter";
import React from "react";

const page = () => {
  const onFilterChange = () => {};
  return (
    <div className="w-full h-full flex flex-wrap justify-center items-center">
      <ProductFilters onFilterChange={onFilterChange} />
    </div>
  );
};

export default page;
