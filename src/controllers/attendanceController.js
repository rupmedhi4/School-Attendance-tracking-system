const ClassModel = require('../models/ClassModel'); 

exports.markClassAttendance = async (req, res) => {
    const { classId } = req.params;
    const { attendanceRecords } = req.body;

    try {
        // Check if class exists
        const classData = await ClassModel.findById(classId);
        if (!classData) {
            return res.status(404).json({ message: "Invalid class ID" });
        }

        // Check if any attendance record is already marked
        for (const record of attendanceRecords) {
            const { studentId, date } = record;

            // Find the specific student in the class
            const studentData = await ClassModel.findOne(
                { _id: classId, "students._id": studentId },
                { "students.$": 1 }
            );

            // Check if student exists in the class
            if (!studentData || !studentData.students.length) {
                return res.status(404).json({ message: `Student ID ${studentId} not found in class` });
            }

            const student = studentData.students[0];

            // Check if attendance for the given date is already marked
            const attendanceExists = student.attendance.some(
                (att) => att.date.toISOString().split('T')[0] === date
            );

            if (attendanceExists) {
                return res.status(400).json({
                    message: `Attendance for student ID ${studentId} on ${date} is already marked. No attendance marked.`
                });
            }
        }

        // If all records are valid, mark attendance for each record
        for (const record of attendanceRecords) {
            const { studentId, date, present } = record;

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
