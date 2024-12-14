import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const CarGrid = () => {
  const [cars, setCars] = useState([]); // To store all the cars
  const [sortBy, setSortBy] = useState('price'); // Default sorting by price
  const [sortOrder, setSortOrder] = useState('asc'); // Default sorting in ascending order
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination

  // Fetch all cars or apply filters when the page loads or filter changes
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/cars', {
          params: {
            sortBy: sortBy,
            sortOrder: sortOrder,
            page: currentPage,
            limit: 16, 
          },
        });

        if (response.data && Array.isArray(response.data)) {
          setCars(response.data); 
        } else {
          console.error('Invalid data format:', response.data);
          setCars([]); 
        }
      } catch (error) {
        console.error('Error fetching cars:', error);
        setCars([]);
      }
    };

    fetchCars();
  }, [sortBy, sortOrder, currentPage]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">All Cars</h1>

        {/* Sorting Filters */}
        <div className="mb-6">
          <label className="mr-4">Sort By: </label>
          <select
            onChange={(e) => setSortBy(e.target.value)}
            value={sortBy}
            className="border p-2"
          >
            <option value="price">Price</option>
            <option value="year">Year</option>
            <option value="make">Make</option>
          </select>

          <label className="ml-4 mr-4">Order: </label>
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            value={sortOrder}
            className="border p-2"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>

        {/* Grid for Displaying Cars */}
        <div className="grid grid-cols-1 gap-x-1 gap-y-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-10">
  {cars && cars.length > 0 ? (
    cars.map((car) => (
      <Link to={`/cars/${car._id}`} key={car._id}>
        <div className="group bg-white rounded-lg shadow-xl overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl">
          {/* Car Image */}
          <img
            src={car.images[0] || 'https://via.placeholder.com/300'} // Use a placeholder if no image URL
            alt={car.make + ' ' + car.model}
            className="w-full h-72 object-cover group-hover:opacity-80 transition-opacity duration-300"
          />
          {/* Car Details */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900">{car.make} {car.model}</h3>
            <p className="mt-2 text-base text-gray-700">Price: ${car.price}</p>
            <p className="text-sm text-gray-500">Year: {car.year}</p>
          </div>
        </div>
      </Link>
    ))
  ) : (
    <p>No cars available</p>
  )}
</div>


        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          <span className="mx-4">{currentPage}</span>
          <button
            onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarGrid;
