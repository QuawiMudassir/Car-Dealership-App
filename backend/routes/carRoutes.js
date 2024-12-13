const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

// Routes
router.get('/', carController.getCars); // Get all cars or search by name
router.get('/:id', carController.getCarById); // Get car by ID
router.get('/featured/premium', carController.getFeaturedCars);
router.get('/makes/brands', carController.getMakes); // Get all makes 
router.get('/models/:make', carController.getModelsByMake); // Get models by make
router.post('/', carController.createCar); // Create a new car
router.put('/:id', carController.updateCar); // Update an existing car by ID
router.delete('/:id', carController.deleteCar); // Delete a car by ID




module.exports = router;
