const express = require('express');
const { getHabitacion, getAllHabitaciones, createHabitacion, updateHabitacion, deleteHabitacion } = require('../controllers/habitacionController');
const { protect, admin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/:id', getHabitacion);
router.get('/', getAllHabitaciones);

// Protected routes
//admin
router.post('/', protect, admin, createHabitacion);
router.put('/:id', protect, admin, updateHabitacion);
router.delete('/:id', protect, admin, deleteHabitacion);

module.exports = router;
