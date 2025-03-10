const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: ['true', 'Title is required']
    },
    priority: {
        type: Number,
        default: 0
    },
    created_at: {
        type: Date,
        default: new Date()
    },
    updated_at: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('Galery', Schema );
