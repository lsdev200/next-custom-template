"use client";
import Pagination from "@/app/components/pagination";
import React from "react";
import { useEffect, useState } from "react";

const PaginationP = () => {
  // ** pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Replace with your total number of pages

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // You can fetch data for the new page here
  };

  return (
    <div className="w-full h-full flex flex-wrap justify-center items-center">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PaginationP;
