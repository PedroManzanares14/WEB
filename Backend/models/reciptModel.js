const mongoose = require('mongoose');

// Esquema de recibo
const reciptSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, // Referencia al modelo de Usuario
        ref: 'User',
        required: true,
    },
    habitacion: {
        type: mongoose.Schema.Types.ObjectId, // Referencia al modelo de Habitación
        ref: 'Habitacion',
        required: true,
    },
    itemsPrice: {
        type: Number,
        required: true,
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false,
    },
    paidAt: {
        type: Date,
    },
});

// Exportar modelo
module.exports = mongoose.model('Recipt', reciptSchema);
