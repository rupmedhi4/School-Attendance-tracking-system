

const addSubjectValidation = (req, res, next) => {
    const { subjectName } = req.body;

    if (!subjectName) {
        return res.status(400).json({
            message: 'subjectName is required',
        });
    }
    
    if (subjectName.length < 1 || subjectName.length > 30) {
        return res.status(400).json({
            message: 'subjectName length should be between 1 and 30',
        });
    }

    next();
};

module.exports = {
    addSubjectValidation
};
