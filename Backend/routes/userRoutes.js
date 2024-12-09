const express = require('express');
const userController = require('../controllers/userController');
const { protect, admin } = require('../middlewares/authMiddleware');

const router = express.Router();

// Public routes
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

// Protected routes
router.get('/:id', protect, userController.getUser);
router.put('/:id', protect, userController.updateUser);
router.delete('/:id', protect, admin, userController.deleteUser);

// Admin-only route
router.get('/', protect, admin, userController.getAllUsers);

module.exports = router;