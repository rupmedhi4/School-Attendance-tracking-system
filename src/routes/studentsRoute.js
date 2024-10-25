const express = require('express');
const {addStudentToClass,getClassStudents}= require('../controllers/studentController')

const router = express.Router();

router.post('/:classId/students', addStudentToClass);
router.get('/:classId/students', getClassStudents);






module.exports = router;
