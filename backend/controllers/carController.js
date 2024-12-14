const Car = require('../models/car');

// Fetch all cars with pagination and search functionality
const getCars = async (req, res) => {
  const { page = 1, limit = 16, search, sortBy, sortOrder } = req.query;

  try {
    let query = {};
    let sort = {};

    // If a search term is provided, include it in the query
    if (search) {
      query = {
        $or: [
          { make: { $regex: search, $options: 'i' } },  // Search by make (case-insensitive)
          { model: { $regex: search, $options: 'i' } }, // Search by model (case-insensitive)
        ]
      };
    }

    // Handle sorting if parameters are provided
    if (sortBy) {
      sort[sortBy] = sortOrder === 'desc' ? -1 : 1; // Ascending or descending order
    }

    // Fetch cars with pagination and sorting
    const cars = await Car.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort(sort)
      .exec();

    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Fetch a single car by its ID
const getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).json({ message: 'Car not found' });
    res.json(car);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Fetch top 6 most expensive cars based on price
const getFeaturedCars = async (req, res) => {
  try {
    const cars = await Car.find().sort({ price: -1 }).limit(6).exec(); // Sort by price descending
    if (!cars || cars.length === 0) {
      return res.status(404).json({ message: 'No featured cars found' });
    }
    res.json(cars); // Send the cars as a response
  } catch (err) {
    console.error('Error fetching featured cars:', err); // Log the error for debugging
    res.status(500).json({ message: err.message });
  }
};

// Fetch all unique car makes/brands
const getMakes = async (req, res) => {
  try {
    // Apply case-insensitive search for all makes
    const makes = await Car.find({}).distinct('make').collation({ locale: 'en', strength: 2 });

    // If no makes found, return an appropriate message
    if (!makes || makes.length === 0) {
      return res.status(404).json({ message: "No makes found" });
    }

    res.json(makes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Fetch all models for a specific make
const getModelsByMake = async (req, res) => {
  const { make } = req.params;

  try {
    // Find all cars matching the provided make (case-insensitive)
    const cars = await Car.find({ make: { $regex: new RegExp(make, 'i') } });

    // If no cars found, return a custom message
    if (!cars || cars.length === 0) {
      return res.status(404).json({ message: `No cars found for make: ${make}` });
    }

    // Return the full details of all matching cars
    res.json(cars);
  } catch (err) {
    // Handle server errors
    res.status(500).json({ message: err.message });
  }
};

// Add a new car to the database
const createCar = async (req, res) => {
  try {
    const { 
      make, 
      model, 
      price, 
      year, 
      color, 
      kilometers, 
      vin, 
      images 
    } = req.body; // Ensure all required fields are extracted

    // Create a new car document
    const car = new Car({ 
      make, 
      model, 
      price, 
      year, 
      color, 
      kilometers, 
      vin, 
      images // Optional if not always provided
    });

    // Save to the database
    const savedCar = await car.save();

    res.status(201).json(savedCar);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an existing car by its ID
const updateCar = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the car and update it with new data
    const updatedCar = await Car.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

    if (!updatedCar) {
      return res.status(404).json({ message: 'Car not found' });
    }

    res.json(updatedCar);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Remove a car from the database by its ID
const deleteCar = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the car by ID and delete it
    const deletedCar = await Car.findByIdAndDelete(id);

    if (!deletedCar) {
      return res.status(404).json({ message: 'Car not found' });
    }

    res.json({ message: 'Car deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getCars, getCarById, getFeaturedCars, getMakes, getModelsByMake, createCar, updateCar, deleteCar };
