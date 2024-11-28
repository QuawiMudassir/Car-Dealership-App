const Car = require('../models/car');

// Get all cars with pagination
const getCars = async (req, res) => {
  const { page = 1, limit = 16 } = req.query;
  try {
    const cars = await Car.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get car by ID
const getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).json({ message: 'Car not found' });
    res.json(car);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new car
const addCar = async (req, res) => {
  const newCar = new Car(req.body);
  try {
    await newCar.save();
    res.status(201).json(newCar);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a car by ID
const updateCar = async (req, res) => {
  try {
    const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCar) return res.status(404).json({ message: 'Car not found' });
    res.json(updatedCar);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a car by ID
const deleteCar = async (req, res) => {
  try {
    const deletedCar = await Car.findByIdAndDelete(req.params.id);
    if (!deletedCar) return res.status(404).json({ message: 'Car not found' });
    res.json({ message: 'Car deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getCars, getCarById, addCar, updateCar, deleteCar };