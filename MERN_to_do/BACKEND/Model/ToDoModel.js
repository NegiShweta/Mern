const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true // Use "required" instead of "require"
    }
});

module.exports = mongoose.model('ToDo', todoSchema); // Fix the model export line
