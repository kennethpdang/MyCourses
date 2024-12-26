const express = require('express');
const router = express.Router();

// Routes
router.get('/', (request, response) => {
    response.json({mssg: "Get all workouts."});
});

router.get('/:id', (request, response) => {
    response.json({mssg: "Get a single workout."});
});

router.post('/', (request, response) => {
    response.json({mssg: "Post a new workout."})
});

router.delete('/:id', (request, response) => {
     response.json({mssg: "Delete a workout."});
});

router.patch('/:id', (request, response) => {
    response.json({mssg: "Update a workout."});
});

module.exports = router;