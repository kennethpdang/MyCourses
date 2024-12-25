const express = require('express');
const app = express();
require('dotenv').config();

app.use((request, response, next) => {
    console.log(request.path, request.method);
    next();
});

// Routes
app.get('/', (request, response) => {
    response.json({mssg: "Welcome to the application."});
});

// Listen for Requests:
app.listen(process.env.PORT, () => {
    console.log("Listening on port 4000!");
});