const express = require('express');
const { getHabitacion, getAllHabitaciones, createHabitacion, updateHabitacion, deleteHabitacion } = require('../controllers/habitacionController');

const router = express.Router();

router.get('/:id', getHabitacion);
router.get('/', getAllHabitaciones);
router.post('/', createHabitacion);
router.put('/:id', updateHabitacion);
router.delete('/:id', deleteHabitacion);

module.exports = router;
