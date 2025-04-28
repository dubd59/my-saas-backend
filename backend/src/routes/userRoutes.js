const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController');
const { authenticate } = require('../middleware/authMiddleware');

// User registration route
router.post('/register', registerUser);

// User login route
router.post('/login', loginUser);

// User profile retrieval route
router.get('/profile', authenticate, getUserProfile);

module.exports = router;
