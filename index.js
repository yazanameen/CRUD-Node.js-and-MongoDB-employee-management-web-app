const express = require('express');
const connectDB = require('./config/db');
const employeeRouter = require('./models/Employee');
const bodyParser = require('body-parser');
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

// Routes
app.use('/employees', employeeRouter);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
