const mongoose = require('mongoose');

const classSchema = mongoose.Schema({
    className: {
        type: String,
        unique: true,
        required: true, 
        trim: true, 
        minlength: 1
    }
}, { timestamps: true }); 

const ClassModel = mongoose.model('Class', classSchema);

module.exports = ClassModel;
