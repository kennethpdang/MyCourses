const express = require('express');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workout.js');

app.use(express.json()); 

app.use((request, response, next) => {
    console.log(request.path, request.method);
    next();
});

// Routes
app.use('/api/workouts', workoutRoutes); // Uses all routes from workout routes.

// Connect to MongoDB:
mongoose.connect(process.env.MONGODB_URI)

// Listen for Requests:
app.listen(process.env.PORT, () => {
    console.log("Listening on port 4000!");
});