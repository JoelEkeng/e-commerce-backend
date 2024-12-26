const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

// Import routes
const adminRoutes = require('./routes/admin'); // Admin functionality for products
const userRoutes = require('./routes/user'); // User-related functionality
const userauthentication = require('./routes/userauthentication'); // User-related functionality

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parse JSON bodies

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/admin', adminRoutes); // Admin routes
app.use('/user', userRoutes); // User routes
app.use('/user/auth', userauthentication); // User authentication routes

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to Samsung E-commerce API');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
