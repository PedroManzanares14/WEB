const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    user : { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phone : { type: String, required: true, unique: true },
    country : { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    bankAccount: { type: String, required: false },
});

module.exports = mongoose.model('User', userSchema);