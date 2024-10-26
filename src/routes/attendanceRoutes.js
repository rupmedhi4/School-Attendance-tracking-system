const express = require('express');
const { markClassAttendance,getClassAttendance } = require('../controllers/attendanceController');
const router = express.Router();

router.post('/:classId/attendance', markClassAttendance);
router.get('/:classId/attendance', getClassAttendance);

module.exports = router;
