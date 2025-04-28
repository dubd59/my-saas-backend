const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticate } = require('../middleware/authMiddleware');

// User registration route
router.post('/register', userController.registerUser);

// User login route
router.post('/login', userController.loginUser);

// User profile retrieval route
router.get('/profile', authenticate, userController.getUserProfile);

module.exports = router;
