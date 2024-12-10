const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const habitacionRoutes = require('./routes/habitacionRoutes');
const reciptRoutes = require('./routes/reciptRoutes');

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/habitaciones', habitacionRoutes);
app.use('/api/recipts', reciptRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const { errorHandler } = require('./middlewares/errorMiddleware');

app.use(errorHandler);

