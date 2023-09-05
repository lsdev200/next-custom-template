"use client";
// components/ReviewComponent.tsx
import React, { useState, useEffect } from 'react';

interface Review {
  id: number;
  rating: number;
  text: string;
  date: string;
  helpfulCount: number;
}

interface ReviewComponentProps {
  reviews: Review[];
}

const ReviewComponent: React.FC<ReviewComponentProps> = ({ reviews }) => {
  const [sortedReviews, setSortedReviews] = useState([...reviews]);

  const sortByDate = () => {
    const sortedByDate = [...reviews].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
    setSortedReviews(sortedByDate);
  };

  const sortByHelpfulness = () => {
    const sortedByHelpfulness = [...reviews].sort((a, b) => b.helpfulCount - a.helpfulCount);
    setSortedReviews(sortedByHelpfulness);
  };

  useEffect(() => {
    // Initialize with the default sorting (by date)
    sortByDate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reviews]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Reviews</h2>
      <div className="mb-4">
        <button onClick={sortByDate} className="mr-2 px-3 py-2 rounded-md bg-gray-200">
          Sort by Date
        </button>
        <button onClick={sortByHelpfulness} className="px-3 py-2 rounded-md bg-gray-200">
          Sort by Helpfulness
        </button>
      </div>
      <div className="space-y-4">
        {sortedReviews.map((review) => (
          <div key={review.id} className="bg-white p-4 rounded-md shadow-md">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <span className="text-xl mr-2">⭐️</span>
                <span>{review.rating}</span>
              </div>
              <span className="text-gray-600">{review.date}</span>
            </div>
            <p className="mb-2">{review.text}</p>
            <div className="text-right">
              <button className="text-blue-500">Helpful ({review.helpfulCount})</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewComponent;

//! TODO:
// filter working  mode ..