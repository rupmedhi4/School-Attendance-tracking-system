const express = require('express');
const { addSubjectValidation } = require('../validation/subjectRouteValidation');
const { addSubject,getSubjectsByClassId  } = require('../controllers/subjectController');

const router = express.Router();

router.post('/:classId/subjects', addSubjectValidation, addSubject);
router.get('/:classId/subjects', getSubjectsByClassId);





module.exports = router;
