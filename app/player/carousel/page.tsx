import ImageCarousel from "@/app/components/Carousel/imageCarousel";
import React from "react";

const page = () => {
  const images = [
    "/assets/img/Event-photography-examples.jpg",
    "/assets/img/event.jpg",
    "/assets/img/Fiestro_img3.jpg",
    // Add more image URLs
  ];

  const captions = [
    "Image 1 Caption",
    "Image 2 Caption",
    "Image 3 Caption",
    // Add more captions
  ];
  return (
    <div>
      <ImageCarousel images={images} captions={captions} autoPlay={true} />
    </div>
  );
};

export default page;
