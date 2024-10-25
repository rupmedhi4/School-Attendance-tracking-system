

const createClassValidation = (req, res) => {
    const { className } = req.body;

    if (!className) {
        return res.status(400).json({
            message: 'className is required',
        });
    }

    if (className.length < 1 ) {
        return res.status(400).json({
            message: 'className length should be between 1 and 4 characters',
        });
    }

}

module.exports={
    createClassValidation
}
