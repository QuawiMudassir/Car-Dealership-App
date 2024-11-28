const express = require('express');
const mongoose = require('mongoose');
const carRoutes = require('./routes/carRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/cars', carRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/car_dealership', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

// Start Server
app.listen(3000, () => console.log('Server running on port 3000'));