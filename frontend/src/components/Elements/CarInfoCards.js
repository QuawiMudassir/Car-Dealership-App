import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import ImageCarousel from './ImageCarousel'; // Ensure this component is implemented or imported

const CarInfoCards = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/api/cars/${id}`);
        console.log("Fetched car details:", data); // Log the response
        setCar(data);
      } catch (err) {
        console.error('Error fetching car details:', err);
      }
    };
  
    console.log("Car ID:", id); 
    fetchCarDetails();
  }, [id]);

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      {/* Go Back Button */}
      <button
        onClick={() => navigate(-1)} // Navigate back
        className="absolute top-35 left-20 z-50 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium py-1 px-3 rounded"
      >
        <ChevronLeftIcon className="h-5 w-5 mr-2" />
      </button>

      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold text-gray-900">
          {car.make} {car.model}
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Detailed information about this car.</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium text-gray-900">Year</dt>
            <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">{car.year}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium text-gray-900">Color</dt>
            <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">{car.color}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium text-gray-900">Kilometers Driven</dt>
            <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">{car.kilometers} km</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium text-gray-900">VIN</dt>
            <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">{car.vin}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium text-gray-900">Price</dt>
            <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">${car.price}</dd>
          </div>
          {/* Carousel */}
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium text-gray-900">Images</dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ImageCarousel images={car.images} />
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default CarInfoCards;
