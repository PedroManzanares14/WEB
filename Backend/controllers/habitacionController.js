const Habitacion = require('../models/habitacionModel');

// Obtener una habitación por ID
const getHabitacion = async (req, res) => {
    try {
        const habitacion = await Habitacion.findById(req.params.id);
        if (!habitacion) {
            return res.status(404).json({ message: 'Habitación no encontrada' });
        }
        res.status(200).json(habitacion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todas las habitaciones
const getAllHabitaciones = async (req, res) => {
    try {
        const habitaciones = await Habitacion.find();
        res.status(200).json(habitaciones);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Crear una nueva habitación
const createHabitacion = async (req, res) => {
    const { tittle, description, price, image, size, disponibility, rating, numReviews } = req.body;

    try {
        const habitacion = new Habitacion({
            tittle,
            description,
            price,
            image,
            size,
            disponibility,
            rating,
            numReviews,
        });

        await habitacion.save();
        res.status(201).json(habitacion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar una habitación existente
const updateHabitacion = async (req, res) => {
    try {
        const updatedHabitacion = await Habitacion.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedHabitacion) {
            return res.status(404).json({ message: 'Habitación no encontrada' });
        }

        res.status(200).json(updatedHabitacion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar una habitación
const deleteHabitacion = async (req, res) => {
    try {
        const deletedHabitacion = await Habitacion.findByIdAndDelete(req.params.id);
        if (!deletedHabitacion) {
            return res.status(404).json({ message: 'Habitación no encontrada' });
        }

        res.status(200).json({ message: 'Habitación eliminada correctamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getHabitacion,
    getAllHabitaciones,
    createHabitacion,
    updateHabitacion,
    deleteHabitacion,
};
