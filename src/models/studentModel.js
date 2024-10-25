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
        maxlength:3
    }
});

module.exports = studentSchema;
