// userController.js
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

// Helper function to generate JWT
const generateToken = (id, isAdmin) => {
    return jwt.sign({ id, isAdmin }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Register a new user
const registerUser = async (req, res) => {
    const { name, user, email, phone, country, password, bankAccount } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            user,
            email,
            phone,
            country,
            password: hashedPassword,
            bankAccount,
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// User login
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });

        if (user && await bcrypt.compare(password, user.password)) {
            const token = generateToken(user._id, user.isAdmin);
            res.status(200).json({ message: 'Login successful', token, user });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get user by ID
const getUser = async (req, res) => {
    try {
        const isValidId = mongoose.Types.ObjectId.isValid(req.params.id);
        if (!isValidId) {
            return res.status(400).json({ error: "Invalid ID format" });
        }

        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all users (admin only)
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update user
const updateUser = async (req, res) => {
    try {
        const isValidId = mongoose.Types.ObjectId.isValid(req.params.id);
        if (!isValidId) {
            return res.status(400).json({ error: "Invalid ID format" });
        }

        const allowedUpdates = ["name", "user", "email", "phone", "country", "password", "bankAccount"];
        const updates = Object.keys(req.body).filter(key => allowedUpdates.includes(key));
        const updateData = {};

        for (const key of updates) {
            updateData[key] = req.body[key];
        }

        if (updateData.password) {
            updateData.password = await bcrypt.hash(updateData.password, 10);
        }

        const updatedUser = await User.findByIdAndUpdate(req.params.id, updateData, { new: true, runValidators: true });

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete user
const deleteUser = async (req, res) => {
    try {
        const isValidId = mongoose.Types.ObjectId.isValid(req.params.id);
        if (!isValidId) {
            return res.status(400).json({ error: "Invalid ID format" });
        }

        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    registerUser,
    loginUser,
    getUser,
    getAllUsers,
    updateUser,
    deleteUser
};
