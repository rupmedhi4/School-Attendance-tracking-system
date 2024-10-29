const ClassModel = require("../models/ClassModel")



exports.validateAttendanceMarking = async (req, res, next) => {
    const { classId } = req.params;
    const { attendanceRecords, date } = req.body;



    if (!isValidDateFormat(date)) {
        return res.status(400).json({ message: "Invalid date format. Please use 'yyyy-mm-dd' format." });
    }
    if (!isValidMonthYear(date)) {
        return res.status(400).json({ message: "Invalid date " });
    }

    if (!classId || !attendanceRecords || !date) {
        return res.status(400).json({ message: "Missing required fields: classId, attendanceRecords, or date" });
    }

    try {
        const classData = await ClassModel.findById(classId);

        if (!classData) {
            return res.status(404).json({ message: "Invalid class ID" });
        }

        for (const record of attendanceRecords) {
            const { studentId } = record;

            const studentData = await ClassModel.findOne(
                { _id: classId, "students._id": studentId },
                { "students.$": 1 }
            );

            if (!studentData || !studentData.students.length) {
                return res.status(404).json({ message: `Student ID ${studentId} not found in class` });
            }

            const student = studentData.students[0];
            const attendanceExists = student.attendance.find(
                (att) => att.date.toISOString().split('T')[0] === date
            );

            console.log(attendanceExists);


            if (attendanceExists) {
                return res.status(400).json({
                    message: `Attendance for student ID ${studentId} on ${date} is already marked`
                });
            }
        }

        next();
    } catch (error) {
        res.status(500).json({ message: "Validation error", error: error.message });
    }
};


function isValidDateFormat(date) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(date);
}

function isValidMonthYear(givenDate) {
   
    const date = new Date(givenDate);

    const year = date.getFullYear(); 
    const month = date.getMonth() + 1; 
    const day = date.getDate();


   if(year > new Date().getFullYear() || month >new Date().getMonth()+1 || day > new Date().getDate() ){
       return false;
   }
   return true

}
