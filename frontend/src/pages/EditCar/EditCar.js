import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditCar = () => {
  const { id } = useParams();
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');
  const [kilometers, setKilometers] = useState('');
  const [vin, setVin] = useState('');
  const [price, setPrice] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Using useNavigate instead of useHistory

  useEffect(() => {
    // Fetch the car data by ID
    const fetchCar = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/cars/${id}`);
        const car = response.data;
        setMake(car.make);
        setModel(car.model);
        setYear(car.year);
        setColor(car.color);
        setKilometers(car.kilometers);
        setVin(car.vin);
        setPrice(car.price);
        setImages(car.images); // Optional, depending on how images are handled
      } catch (err) {
        console.error('Error fetching car data:', err);
      }
    };
    fetchCar();
  }, [id]);

  const handleImageChange = (e) => {
    if (e.target.files.length > 4) {
      setError('You can upload a maximum of 4 images.');
    } else {
      setImages(Array.from(e.target.files));
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      images.forEach((image) => formData.append('images', image));

      const response = await axios.put(`http://localhost:3000/api/cars/${id}`, {
        make,
        model,
        year,
        color,
        kilometers,
        vin,
        price,
        images: images.map((image) => image.name), // Assuming image names are sent to the backend
      });

      // Redirect to the dashboard after editing the car
      navigate('/AdminDashboard');
    } catch (err) {
      setError('Failed to update car. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Edit Car</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Same input fields as AddCar, with pre-filled values */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Make:</label>
          <input 
            type="text" 
            value={make} 
            onChange={(e) => setMake(e.target.value)} 
            required 
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Model:</label>
          <input 
            type="text" 
            value={model} 
            onChange={(e) => setModel(e.target.value)} 
            required 
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Year:</label>
          <input 
            type="number" 
            value={year} 
            onChange={(e) => setYear(e.target.value)} 
            required 
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Color:</label>
          <input 
            type="text" 
            value={color} 
            onChange={(e) => setColor(e.target.value)} 
            required 
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Kilometers:</label>
          <input 
            type="number" 
            value={kilometers} 
            onChange={(e) => setKilometers(e.target.value)} 
            required 
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">VIN:</label>
          <input 
            type="text" 
            value={vin} 
            onChange={(e) => setVin(e.target.value)} 
            required 
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Price:</label>
          <input 
            type="number" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            required 
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Images (max 4):</label>
          <input 
            type="file" 
            multiple 
            onChange={handleImageChange} 
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="flex justify-center">
          <button 
            type="submit" 
            className="mt-4 px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
          >
            Update Car
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCar;
