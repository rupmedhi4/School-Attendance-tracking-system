const express = require('express');
const {addStudentToClass,getClassStudents,updateStudent,removeStudent}= require('../controllers/studentController')

const router = express.Router();

router.post('/:classId/students', addStudentToClass);
router.get('/:classId/students', getClassStudents);
router.put('/students/:studentId', updateStudent);
router.delete('/students/:studentId', removeStudent);






module.exports = router;
