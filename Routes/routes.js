const express = require('express');
const router = express.Router();
const userController = require('../Controllers/controller'); // Import the controller

// Define routes for CRUD operations
router.post('/', userController.createPerson);
router.get('/:id', userController.getPersonById);
router.put('/:id', userController.updatePerson);
router.delete('/:id', userController.deletePerson);

module.exports = router;
