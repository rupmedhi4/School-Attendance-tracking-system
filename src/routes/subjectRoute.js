const express = require('express');
const { addSubjectValidation } = require('../validation/subjectRouteValidation');
const { addSubject } = require('../controllers/subjectController');

const router = express.Router();

router.post('/:classId/subjects', addSubjectValidation, addSubject);

module.exports = router;
