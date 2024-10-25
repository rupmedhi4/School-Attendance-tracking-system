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


exports.updateStudent = async (req, res) => {
    const { studentId } = req.params;
    const { name, rollNumber } = req.body;

    // Validation
    if (!name || !rollNumber) {
        return res.status(400).json({ message: 'Name and rollNumber are required' });
    }
    if (name.length < 3) {
        return res.status(400).json({ message: 'Name should be at least 3 characters long' });
    }
    if (rollNumber.length < 1) {
        return res.status(400).json({ message: 'Roll number should be at least 1 characters long' });
    }

    try {
        const classData = await ClassModel.findOneAndUpdate(
            { "students._id": studentId },
            { $set: { "students.$.name": name, "students.$.rollNumber": rollNumber } },
            { new: true }
        );

        if (!classData) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.status(200).json({ message: 'Student updated successfully', student: classData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating student', error: error.message });
    }
};


exports.removeStudent = async (req, res) => {
    const { studentId } = req.params; 

    try {
      
        const updatedClass = await ClassModel.findOneAndUpdate(
            { "students._id": studentId },
            { 
                $pull: { 
                    students: { _id: studentId } 
                } 
            }, // Use $pull to remove the student
            { new: true } // Return the updated class document
        );

        if (!updatedClass) {
            return res.status(404).json({ message: 'Student not found in any class.' });
        }

        res.status(200).json({
            message: 'Student removed successfully',
            updatedClass, 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error removing student',
            error: error.message,
        });
    }
};