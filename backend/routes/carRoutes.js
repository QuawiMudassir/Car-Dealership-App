const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

// Routes

// Get all cars or search by name
router.get('/', carController.getCars);

// Get car details by ID
router.get('/:id', carController.getCarById);

// Get featured premium cars
router.get('/featured/premium', carController.getFeaturedCars);

// Get all car makes/brands
router.get('/makes/brands', carController.getMakes);

// Get models by specific car make
router.get('/models/:make', carController.getModelsByMake);

// Create a new car
router.post('/', carController.createCar);

// Update an existing car by ID
router.put('/:id', carController.updateCar);

// Delete a car by ID
router.delete('/:id', carController.deleteCar);

module.exports = router;
