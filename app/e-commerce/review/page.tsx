import ReviewComponent from "@/app/components/review";
import Widget1 from "@/app/components/widget/widget1";
import React from "react";

const page = () => {
  // ** review
  const reviews = [
    {
      id: 1,
      rating: 5,
      text: "Great product! Highly recommended.",
      date: "2023-01-10",
      helpfulCount: 15,
    },
    {
      id: 2,
      rating: 4,
      text: "Good product, but could be improved.",
      date: "2023-01-05",
      helpfulCount: 10,
    },
    // Add more reviews here
  ];
  
  return (
    <div className="w-full h-full flex flex-wrap justify-center items-center">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Product Reviews</h1>
        <ReviewComponent reviews={reviews} />
      </div>


    </div>
  );
};

export default page;
