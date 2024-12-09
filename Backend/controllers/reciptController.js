const Recipt = require('../models/reciptModel');

// Obtener todos los recibos
const getAllRecipts = async (req, res) => {
    try {
        const recipts = await Recipt.find()
            .populate('user', 'name email') // Mostrar información del usuario relacionado
            .populate('habitacion', 'tittle price'); // Mostrar información de la habitación relacionada

        res.status(200).json(recipts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener un recibo por ID
const getRecipt = async (req, res) => {
    try {
        const recipt = await Recipt.findById(req.params.id)
            .populate('user', 'name email') // Mostrar información del usuario relacionado
            .populate('habitacion', 'tittle price'); // Mostrar información de la habitación relacionada

        if (!recipt) {
            return res.status(404).json({ message: 'Recibo no encontrado' });
        }

        res.status(200).json(recipt);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Crear un nuevo recibo
const createRecipt = async (req, res) => {
    const { user, habitacion, itemsPrice, isPaid, paidAt } = req.body;

    try {
        const recipt = new Recipt({
            user,
            habitacion,
            itemsPrice,
            isPaid,
            paidAt,
        });

        await recipt.save();
        res.status(201).json(recipt);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getAllRecipts,
    getRecipt,
    createRecipt,
};
