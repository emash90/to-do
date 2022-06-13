const Task = require("../models/tasksModel");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const createTask = async (req, res) => {
    const { taskName, author, isComplete, uid, date } = req.body;

    try {
        const task = new Task({
            user_id: req.user.id,
            taskName,
            author,
            isComplete,
            date,
        });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
};

const getTasks = async (req, res) => {
    try {
        const allTasks = await Task.find({ user_id: req.user.id }).sort({
            createdAt: -1,
        });
        res.status(200).json(allTasks);
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteTask = asyncHandler(async (req, res) => {
    const { id: taskId } = req.params;
    try {
        const task = await Task.findById({ _id: taskId });
        if (!task) return res.status(400).send("No task with that id");
        const user = await User.findById({ _id: req.user.id });
        if (task.user_id.toString() !== user.id) {
            return res.status(401).send("not authorised");
        }
        const taskToDelete = await Task.findByIdAndDelete({ _id: taskId });
        if (taskToDelete) {
            return res.status(200).json(taskId);
        }
        return res.status(400).json("error happenend");
    } catch (error) {
        res.status(500).json(error);
    }
});

const toggleIsComplete = asyncHandler(async (req, res) => {
    const { id: taskId } = req.params;
    try {
        const user = await User.findById({ _id: req.user.id });
        const task = await Task.findById({ _id: taskId });
        if (!task) {
            return res.status(400).json("No task was found");
        }
        if (task.user_id.toString() !== user.id) {
            return res.status(401).send("not authorised");
        }
        const taskToupdate = await Task.findByIdAndUpdate(
            { _id: taskId },
            { isComplete: !task.isComplete },
            { new: true, runValidators: true }
        );
        if (taskToupdate) {
            return res.status(200).json(taskToupdate);
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

const updateTask = asyncHandler(async (req, res) => {
    const { id: taskId } = req.params;
    try {
        const task = await Task.findById({ _id: taskId });
        if (!task) {
            return res.status(400).json("No task was found with that id");
        }
        const user = await User.findById({ _id: req.user.id });
        if (task.user_id.toString() !== user.id) {
            return res.status(401).send("not authorised");
        }
        const { taskName, author, isComplete, uid, date } = req.body;
        const taskToupdate = await Task.findByIdAndUpdate(
            { _id: taskId },
            { taskName, author, isComplete, uid, date },
            { new: true, runValidators: true }
        );
        if (taskToupdate) {
            res.status(200).json(taskToupdate);
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = {
    createTask,
    getTasks,
    deleteTask,
    updateTask,
    toggleIsComplete,
};
