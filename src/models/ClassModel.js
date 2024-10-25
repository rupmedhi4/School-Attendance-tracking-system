const mongoose = require('mongoose');
const studentSchema = require('../models/studentModel')

const classSchema = mongoose.Schema({
    className: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        minlength: 1
    },
    students: [studentSchema]
}, { timestamps: true });

const ClassModel = mongoose.model('Class', classSchema);

module.exports = ClassModel;
