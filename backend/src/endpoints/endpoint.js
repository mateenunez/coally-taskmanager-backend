const Task = require('../models/model');
const { body, validationResult } = require('express-validator');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    try {
        const filter = {}; // Filter query para /api/tasks?completed=true
        const { completed } = req.query;
        if (completed !== undefined){
            filter.completed = completed === 'true';
        }

        const tasks = await Task.find(filter);
        console.log(tasks)
        return res.status(200).json({tasks})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error en una peticion a la base de datos" });
    }

}

const create = async (req, res) => {
    try {
        
        const task = await Task.create(req.body);
        console.log(task)
        return res.status(201).json({task})
        
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Error en los datos enviados por el cliente" });
    }
}

const get = async (req, res) => {
    try {
        console.log(req)
        const id = req.params.id
        const task = await Task.findOne({ _id: id })
        if (!task) {return res.status(404).json({message: `No hay tarea con ID: ${id}`})} 
        else return res.status(200).json({task})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error en una peticion a la base de datos" });
    }
}

const update = async (req, res) => {
    try {
        const { id: id } = req.params
        const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
        runValidators: true,
    })
    if (!task) {return res.status(404).json({message: `No hay tarea con ID: ${id}`})} 
        else return res.status(200).json({task})

    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Error en los datos enviados por el cliente" });
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOneAndDelete({ _id: taskID })
        if (!task) {return res.status(404).json({message: `No hay tarea con ID: ${id}`})} 
        else return res.status(200).json({task})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error en una peticion a la base de datos" });
    }
}


module.exports = {
    getAll, 
    create,
    get,
    update,
    deleteTask
}