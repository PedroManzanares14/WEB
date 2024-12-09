const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Rutas
const userRoutes = require('./routes/userRoutes');
const habitacionRoutes = require('./routes/habitacionRoutes');
const reciptRoutes = require('./routes/reciptRoutes');

app.use('/api/users', userRoutes);
app.use('/api/habitaciones', habitacionRoutes);
app.use('/api/recipts', reciptRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const { errorHandler } = require('./middlewares/errorMiddleware');

app.use(errorHandler);

