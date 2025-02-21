let weatherForm = document.querySelector('.weather-form');
let loginForm = document.querySelector('.login-form');
let navbar = document.querySelector('.navbar');


document.querySelector('#weather-btn').onclick = () =>
{
    weatherForm.classList.toggle('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    
}


document.querySelector('#login-btn').onclick = () =>
{
    loginForm.classList.toggle('active');
    weatherForm.classList.remove('active');
    navbar.classList.remove('active');
}


document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    weatherForm.classList.remove('active');
}

window.onscroll = () =>
{
    weatherForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
document.getElementById('weather-btn').addEventListener('click', function() {
    window.location.href = 'weather.html';
});

// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Import routes
const customerRoutes = require('./routes/customerRoutes');
app.use('/api/customers', customerRoutes);

// Basic route
app.get('/', (req, res) => {
    res.send('Farmers Management System Backend');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



