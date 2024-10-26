const express = require('express')
const {getSingleStudentAttendance} = require("../controllers/studentAttendanceController")

const router = express.Router();


router.get('/:classId/:studentId/attendance', getSingleStudentAttendance);

module.exports = router;
