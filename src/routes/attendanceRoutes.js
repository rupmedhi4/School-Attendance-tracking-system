const express = require('express');
const { markClassAttendance,getAllStudentsAttendance } = require('../controllers/attendanceController');
const router = express.Router();

router.post('/:classId/attendance', markClassAttendance);
router.get('/:classId/attendance', getAllStudentsAttendance);

module.exports = router;
