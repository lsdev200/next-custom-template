"use client";
import Image from "next/image";
// components/ImageCarousel.tsx
import React, { useState, useEffect } from "react";

interface ImageCarouselProps {
  images: string[];
  captions: string[];
  autoPlay?: boolean;
  interval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  captions,
  autoPlay = false,
  interval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval);

      return () => {
        clearInterval(timer);
      };
    }
  }, [autoPlay, interval, images.length]);

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative">
      <div className="absolute inset-0">
        <div
          style={{
            width: "100%",
            height: "500px",
            overflow: "hidden",
          }}
        >
          <Image
            src={images[currentIndex]}
            alt={captions[currentIndex]}
            width={1000}
            height={500}
            className="w-full object-cover "
          />
        </div>
      </div>

      <div className="absolute mt-60 inset-0 flex items-center justify-center">
        <button
          onClick={goToPrev}
          className="text-white bg-gray-900 bg-opacity-50 rounded-full p-2 absolute left-0"
          style={{ fontSize: "1.5rem" }}
        >
          &lt;
        </button>
        <button
          onClick={goToNext}
          className="text-white bg-gray-900 bg-opacity-50 rounded-full p-2 absolute right-0"
          style={{ fontSize: "1.5rem" }}
        >
          &gt;
        </button>
      </div>

      {/* <div className="absolute inset-x-0 bottom-0 p-4 bg-black bg-opacity-50 text-white">
        <p className="text-center" style={{ fontSize: "1.2rem" }}>
          {captions[currentIndex]}
        </p>
      </div> */}
    </div>
  );
};

export default ImageCarousel;
