// src/components/ImageCarousel.js
import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ImageCarousel = ({ images = [] }) => {
  return (
    <div className="relative w-full h-64">
      {/* Carousel Images */}
      <div className="w-full h-full">
        <img
          src={images[0]}
          alt="Car Image"
          className="object-cover w-full h-full rounded"
        />
      </div>
      {/* Previous Button */}
      <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300">
        <FiChevronLeft className="h-6 w-6 text-gray-700" />
      </button>
      {/* Next Button */}
      <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300">
        <FiChevronRight className="h-6 w-6 text-gray-700" />
      </button>
    </div>
  );
};

export default ImageCarousel;
