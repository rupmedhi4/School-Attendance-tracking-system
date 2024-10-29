const ClassModel = require('../models/ClassModel');
const {createClassValidation} = require('../validation/classRoutesValidation')

exports.createClass = async (req, res) => {
    const { className } = req.body;
    if(!className) return res.status(400).json({message:"header required"})

    createClassValidation(req,res)

    try {
        const existingClass = await ClassModel.findOne({ className });
        if (existingClass) {
            return res.status(400).json({
                message: 'Class already exists',
            });
           
        }

        const newClass = new ClassModel({ className });
        await newClass.save();

        res.status(201).json({
            message: 'Class created successfully',
            class: newClass,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error creating class',
            error: 'Internal Server Error', 
            error
        });
    }
};


exports.getAllClasses = async (req, res) => {
    try {
        const classes = await ClassModel.find(); 
        res.status(200).json(classes);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error fetching classes',
            error: error.message,
        });
    }
};


exports.getClassById = async (req, res) => {
    const { classId } = req.params;

    try {
        const classData = await ClassModel.findById(classId);

        if (!classData) {
            return res.status(404).json({
                message: 'Class not found',
            });
        }

        res.status(200).json(classData);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error fetching class',
            error: error.message,
        });
    }
};