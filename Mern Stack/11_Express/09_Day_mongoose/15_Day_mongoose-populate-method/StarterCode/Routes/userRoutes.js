const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Create a new user
router.get('/create', UserController.createUser);
router.get('/', UserController.findUser);

module.exports = router;
