const SubjectModel = require('../models/subjectModel');
const ClassModel = require('../models/ClassModel');

exports.addSubject = async (req, res) => {
    const { classId } = req.params;
    const { subjectName } = req.body;

    try {
        const classExists = await ClassModel.findById(classId);
        if (!classExists) {
            return res.status(404).json({ message: 'Class not found' });
        }

        const addSubject = new SubjectModel({ subjectName, classId });
        await addSubject.save();

        res.status(201).json({
            message: 'Subject added successfully',
            subject: addSubject,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error adding subject',
            error: error.message,
        });
    }
};



exports.getSubjectsByClassId = async (req, res) => {
    const { classId } = req.params;

    try {
        const classExists = await ClassModel.findById(classId);
        if (!classExists) {
            return res.status(404).json({
                message: "Class not found",
            });
        }

        const subjects = await SubjectModel.find({ classId }).select('subjectName -_id');
       
        
        if (!subjects.length) {
            return res.status(404).json({
                message: "No subjects found for this class",
            });
        }

        res.status(200).json({
            data:subjects
        }); 

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error fetching subjects",
            error: error.message,
        });
    }
};