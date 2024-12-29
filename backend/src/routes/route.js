const express = require('express')
const router = express.Router()
const { getAll, create, get, update, deleteTask } = require('../endpoints/endpoint')

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the Task from MongoDB
 *         description:
 *           type: string
 *           description: The description of the Task
 *         completed:
 *           type: boolean
 *           description: If the Task is completed or not
 *         createdAt:
 *           type: Date
 *           description: Date of Task creation
 *       example:
 *         title:  ""
 *         description: ""
 *         completed: false
 */

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: From Tasks Manager
 */

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Returns the list of all the Tasks
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: The list of the Tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 */

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Create a new Task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       201:
 *         description: The Task was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       500:
 *         description: Error in server response
 */

router.route('/').get(getAll).post(create)

/**
 * @swagger
 * /api/tasks/{_id}:
 *   get:
 *     summary: Get a Task by id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: _id
 *         required: true
 *         description: The Task id
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The specified Task details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: The Task was not found
 */

/**
 * @swagger
 * /api/tasks/{_id}:
 *   put:
 *     summary: Update a Task by id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: _id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Task id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       200:
 *         description: The Task was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: The Task was not found
 *       500:
 *         description: Error in server response
 */

/**
 * @swagger
 * /tasks/{_id}:
 *   delete:
 *     summary: Remove the Task by id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: _id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Task id
 *     responses:
 *       200:
 *         description: The Task was deleted succesfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: The Task was not found
 */

router.route('/:id').get(get).put(update).delete(deleteTask)

module.exports = router