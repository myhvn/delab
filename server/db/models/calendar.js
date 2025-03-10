const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: ['true', 'Title is required']
    },
    location: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    editor: {
        type: String,
        default: ""
    },
    cover: {
        type: String,
        default: null
    },
    priority: {
        type: Number,
        default: 0
    },
    attached: {
        type: Boolean,
        default: false
    },
    price: {
        type: Number,
        default: 0
    },
    tags: {
        type: Array,
        default: []
    },
    dates: {
        type: Object,
        default: {}
    },
    time: {
        type: Object,
        default: {}
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

module.exports = mongoose.model('Calendar', Schema );
