"use client"
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';
 // Assuming you're using react-icons for Chevron icons

export const PaginationExample = ({ totalItems }) => {
  const itemsPerPage = 3; // Set to 3 items per page as per your mention
  const totalPages = Math.ceil(totalItems / itemsPerPage); // Calculate total pages
  const [currentPage, setCurrentPage] = useState(1); // Track current page

  // Handle Previous button click
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle Next button click
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle specific page click
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  // Generate page numbers dynamically (showing only a few pages for simplicity)
  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li key={i}>
          <a
            href="#"
            onClick={() => handlePageClick(i)}
            className={`flex items-center justify-center px-3 h-8 leading-tight font-bold rounded-full ${
              currentPage === i
                ? 'text-yellow-500 bg-white border border-yellow-300'
                : 'text-gray-500 bg-white'
            } hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
          >
            {i}
          </a>
        </li>
      );
    }
    return pages;
  };

  return (
    <div>
      <nav aria-label="Page navigation example" className="flex justify-end">
        <ul className="inline-flex items-end -space-x-px text-sm gap-4">
          {/* Previous Button */}
          <li>
            <a
              href="#"
              onClick={handlePrevious}
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <ChevronLeft/> Previous
            </a>
          </li>

          {/* Page Numbers */}
          {renderPageNumbers()}

          {/* Next Button */}
          <li>
            <a
              href="#"
              onClick={handleNext}
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next <ChevronRight />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
