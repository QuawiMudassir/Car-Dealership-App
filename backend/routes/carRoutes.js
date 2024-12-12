const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

// Routes
router.get('/', carController.getCars); // Get all cars or search by name
router.get('/:id', carController.getCarById); // Get car by ID
router.get('/featured/premium', carController.getFeaturedCars);
router.get('/makes/brands', carController.getMakes); // Get all makes 

module.exports = router;
