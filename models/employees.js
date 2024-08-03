const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');

// GET all employees
router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.render('employees/index', { employees });
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

// GET single employee
router.get('/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        res.render('employees/show', { employee });
    } catch (error) {
        res.status(404).send('Employee not found');
    }
});

// POST (create) new employee
router.post('/', async (req, res) => {
    try {
        const newEmployee = new Employee(req.body);
        await newEmployee.save();
        res.redirect('/employees');
    } catch (error) {
        res.status(400).send('Invalid data');
    }
});

// PUT (update) employee
router.put('/:id', async (req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.redirect('/employees');
    } catch (error) {
        res.status(400).send('Invalid data');
    }
});

// DELETE employee
router.delete('/:id', async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.redirect('/employees');
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
