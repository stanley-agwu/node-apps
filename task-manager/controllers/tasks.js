const Task = require('../models/taskModel')

const getAllTasks = (req, res) => {
    res.send('all items')
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
}

const getTask = (req, res) => {
    res.json({id:req.params.id})
}

const updateTask = (req, res) => {
    res.send('update items')
}

const deleteTask = (req, res) => {
    res.send('delete item')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}