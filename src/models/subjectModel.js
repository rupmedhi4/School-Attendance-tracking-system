const mongoose = require('mongoose');

const subjectSchema = mongoose.Schema({
    subjectName: {
        type: String,
        required: true, 
        trim: true, 
    },
    classId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ClassModel',
        required: true, 
    },
    
},{Timestamp:true});

const SubjectModel = mongoose.model('Subject', subjectSchema);

module.exports = SubjectModel;
