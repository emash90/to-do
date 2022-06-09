const router = require('express').Router()
const { createTask, getTasks, deleteTask, updateTask, toggleIsComplete } = require('../controllers/taskControllers')
const protect = require('../middlwares/authMiddleware')


router.route('/').post(protect, createTask).get(protect, getTasks)
router.route('/:id').delete(protect, deleteTask).patch(protect, toggleIsComplete).put(protect, updateTask)

module.exports = router