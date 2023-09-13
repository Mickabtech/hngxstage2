const express = require('express');
const router = express.Router();
const userController = require('../Controllers/controller'); // Import the controller

// Define routes for CRUD operations
router.post('/api/users', userController.createPerson);
router.get('/api/users/:id', userController.getPersonById);
router.put('/api/users/:id', userController.updatePerson);
router.delete('/api/users/:id', userController.deletePerson);

module.exports = router;
