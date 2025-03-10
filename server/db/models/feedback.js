const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    created_at: {
        type: Date,
        default: new Date()
    },
    updated_at: {
        type: Date,
        default: new Date()
    },
    events: {
        type: Array,
        default: []
    },
    email: {
        type: String,
        required: ['true', 'Email is required']
    },
    name: {
        type: String,
        required: ['true', 'Name is required']
    },
    phone: {
        type: String,
        required: ['true', 'Phone is required']
    },
    question: {
        type: String,
        default: ""
    },
});

module.exports = mongoose.model('Feedback', Schema );
