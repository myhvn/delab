const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    data: {
        type: Date,
        default: new Date()
    },
    title: {
        type: String,
        required: ['true', 'Title is required']
    },
    description: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model('Task', Schema );
