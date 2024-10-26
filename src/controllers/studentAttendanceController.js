const ClassModel = require('../models/ClassModel'); 

 exports.getSingleStudentAttendance = async (req, res) => {
    const { classId, studentId } = req.params;

    try {
        const classData = await ClassModel.findOne(
            { _id: classId, "students._id": studentId },
            { "students.$": 1 } 
        );

        if (!classData) {
            return res.status(404).json({ message: 'Class not found' });
        }

        const student = classData.students[0]; 
        const attendanceRecords = student.attendance || []; 

        return res.status(200).json({
            studentId: student._id,
            name: student.name,
            rollNumber: student.rollNumber,
            attendance: attendanceRecords
        });

    } catch (error) {
        console.error('Attendance not found:', error);
        return res.status(500).json({
            message: 'error in fetching Attendance.',
            error: error.message
        });
    }
};






