const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const { mongoose } = require('mongoose');

// Database connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database Connected'))
.catch((err) => console.log('Database NOT Connected', err));

// Initialize Express application
const app = express() 

// Route handler for authentication routes
app.use('/', require('./routes/authRoutes'));

// Start the server and listen on the specified port
const port = 8000; 
app.listen(port, () => console.log(`Server is running on port ${port}`));