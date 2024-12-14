import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [cars, setCars] = useState([]); // Stores all the cars fetched
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(34);
  const navigate = useNavigate();

  // Fetch cars from the database with pagination
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/cars/', {
          params: {
            page: currentPage,
            limit: carsPerPage,
          },
        });
        if (currentPage === 1) {
          setCars(response.data); // Set the cars on the first page
        } else {
<<<<<<< HEAD
          setCars((prevCars) => [...prevCars, ...response.data]); 
=======
          setCars((prevCars) => [...prevCars, ...response.data]); // Append new cars on subsequent pages
>>>>>>> 710f0361d3d9839ebb7317f55ffea60522df4efa
        }
      } catch (error) {
        console.error('Error fetching cars:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCars();
<<<<<<< HEAD
  }, [currentPage]);
=======
  }, [currentPage]); // Fetch cars whenever the page changes
>>>>>>> 710f0361d3d9839ebb7317f55ffea60522df4efa

  const handleAddCar = () => {
    window.location.href = '/AddCar';
  };

  const handleEditCar = (id) => {
    if (id) {
      navigate(`/EditCar/${id}`);
    } else {
      console.error('Car ID is missing');
    }
  };

  const handleRemoveCar = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this car?');
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:3000/api/cars/${id}`);
      setCars((prevCars) => prevCars.filter((car) => car.id !== id));
    } catch (error) {
      console.error('Error removing car:', error);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (isLoading) {
    return <p className="text-center mt-10">Loading cars...</p>;
  }

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Cars</h1>
          <p className="mt-2 text-sm text-gray-700">
<<<<<<< HEAD
            A list of all available cars in inventory.
=======
            A list of all cars in your inventory including their name, type, price, and status.
>>>>>>> 710f0361d3d9839ebb7317f55ffea60522df4efa
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            onClick={handleAddCar}
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:w-auto"
          >
            Add Car
          </button>
        </div>
      </div>

      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      No.
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Make
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Model
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Year
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Color
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Kilometers
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Vin
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Price
                    </th>

                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {cars.map((car, index) => (
                    <tr key={car._id}>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{index + 1}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{car.make}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{car.model}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{car.year}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{car.color}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{car.kilometers}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{car.vin}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{car.price}</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <button
                          onClick={() => handleEditCar(car._id)}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </button>{' '}
                        |{' '}
                        <button
                          onClick={() => handleRemoveCar(car._id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-center space-x-2">
        {cars.length === carsPerPage && (
            <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-4 py-2 text-sm font-medium bg-gray-300 text-gray-700"
            >
            More
            </button>
        )}

      </div>
    </div>
  );
};

export default Dashboard;
