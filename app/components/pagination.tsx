"use client";

// components/Pagination.tsx
import React from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const canNavigateBack = currentPage > 1;
  const canNavigateForward = currentPage < totalPages;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={!canNavigateBack}
        className={`p-2 mr-2 rounded-md ${
          canNavigateBack
            ? "bg-blue-500 text-white"
            : "bg-gray-300 cursor-not-allowed opacity-20"
        }`}
      >
        <BsFillArrowLeftCircleFill />
      </button>
      <p className="text-gray-700">
        Page {currentPage} of {totalPages}
      </p>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={!canNavigateForward}
        className={`p-2 ml-2 rounded-md ${
          canNavigateForward
            ? "bg-blue-500 text-white"
            : "bg-gray-300 cursor-not-allowed opacity-20"
        }`}
      >
        <BsFillArrowRightCircleFill />
      </button>
    </div>
  );
};

export default Pagination;
