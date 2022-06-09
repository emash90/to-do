const mongoose = require('mongoose')
const User = require('../models/userModel')

const taskSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    isComplete: {
        type: Boolean,
        default: false,
        required: false
    },
    date: {
        type: Date,
        default: new Date()
    },
    author: String,
}, {timestamps: true})


const Task = mongoose.model('Task', taskSchema)

module.exports = Task