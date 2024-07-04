const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    consumer: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true,
    },
    planID: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        timestamps: true
    }
});

const UserModel = mongoose.model('users', userModel);

module.exports = UserModel;
