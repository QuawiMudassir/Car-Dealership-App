import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ImageCarousel = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  if (images.length === 0) {
    return <p>No images available</p>;
  }

  return (
    <div className="relative w-full h-64">
      {/* Carousel Images */}
      <div className="w-full h-full">
        <img
          src={images[currentIndex]}
          alt={`Car Image ${currentIndex + 1}`}
          className="object-cover w-full h-full rounded"
        />
      </div>
      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
      >
        <FiChevronLeft className="h-6 w-6 text-gray-700" />
      </button>
      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
      >
        <FiChevronRight className="h-6 w-6 text-gray-700" />
      </button>
    </div>
  );
};

export default ImageCarousel;
