const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true,
        trim: true,
        minlength:1,
        maxlength:30
    },
    rollNumber: { 
        type: Number, 
        required: true, 
        unique: true,
        trim: true,
        minlength:1,
    },
    attendance: [{
        date: { type: Date, required: true, unique: true }, // Ensure unique date
        present: { type: Boolean, default: false }
    }]
});

module.exports = studentSchema;
