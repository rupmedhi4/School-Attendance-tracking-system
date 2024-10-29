const express = require('express');
const { markClassAttendance,getAllStudentsAttendance } = require('../controllers/attendanceController');
const {validateAttendanceMarking} = require('../validation/attendanceValidation')

const router = express.Router();

router.post('/:classId/attendance',validateAttendanceMarking, markClassAttendance);
router.get('/:classId/attendance', getAllStudentsAttendance);

module.exports = router;
