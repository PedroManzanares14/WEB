const mongoose = require('mongoose');
const User = require('../models/userModel');
const Habitacion = require('../models/habitacionModel');
const Recipt = require('../models/reciptModel');
const dotenv = require('dotenv');
const users = require('../data/users'); // Datos de prueba
const habitaciones = require('../data/habitaciones'); // Datos de prueba

dotenv.config();
const connectDB = require('../config/db');

connectDB();

const importData = async () => {
    try {
        await User.deleteMany();
        await Habitacion.deleteMany();
        await Recipt.deleteMany();

        const createdUsers = await User.insertMany(users);
        await Habitacion.insertMany(habitaciones);

        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`Error: ${error}`);
        process.exit(1);
    }
};

importData();
