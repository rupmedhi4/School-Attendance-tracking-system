const ClassModel = require('../models/ClassModel');



exports.markClassAttendance = async (req, res) => {
    const { classId } = req.params;
    const { attendanceRecords, date } = req.body;

    try {
        for (const record of attendanceRecords) {
            const { studentId, present } = record;
            
            await ClassModel.findOneAndUpdate(
                { _id: classId, "students._id": studentId },
                { $push: { "students.$.attendance": { date: new Date(date), present } } }
            );
        }

        res.status(200).json({ message: "Class attendance marked successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error marking attendance", error: error.message });
    }
};





exports.getAllStudentsAttendance = async (req, res) => {
    const { classId } = req.params;

    try {
        const classData = await ClassModel.findById(classId).select('students');

        if (!classData) {
            return res.status(404).json({ message: "Class not found." });
        }

        res.status(200).json({
            allStudents: classData
        });
    } catch (error) {
        console.error("Error fetching attendance:", error);
        res.status(500).json({ message: "Error fetching attendance records.", error: error.message });
    }
};
