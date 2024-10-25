const ClassModel = require('../models/ClassModel');

exports.addStudentToClass = async (req, res) => {
    const { classId } = req.params;
    const { name, rollNumber } = req.body;

    try {
        const classData = await ClassModel.findById(classId);
        if (!classData) {
            return res.status(404).json({ message: 'Class not found' });
        }

        classData.students.push({ name, rollNumber });

        await classData.save();

        res.status(201).json({
            message: 'Student added successfully to class',
            class: classData,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error adding student',
            error: error.message,
        });
    }
};


exports.getClassStudents = async (req, res) => {
    const { classId } = req.params;

    try {
        const classData = await ClassModel.findById(classId, 'students');  
        console.log(classData);
        
        if (!classData) {
            return res.status(404).json({ message: 'Class not found' });
        }

        res.status(200).json(classData.students);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error fetching students', error: error.message });
    }
};