const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    start: {
        type: String,
        required: true,
        trim: true
    },
    end: {
        type: String,
        required: true,
        trim: true
    },
    user: {
        type: String,
        required: true,
        trim: true
    }
},{
    collection: "tasks",
    timestamps: true,
    trim: true

})

module.exports = mongoose.model("Task",TaskSchema)