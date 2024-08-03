const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    department: { type: String, required: true },
    role: { type: String, required: true },
    // Add other fields as needed (e.g., phone, address, etc.)
});

module.exports = mongoose.model('Employee', employeeSchema);
