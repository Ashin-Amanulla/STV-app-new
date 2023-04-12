const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loginSchema = new Schema({
    email: {
        type: String,
        required: true
    },

    otp: {
        type: String,
    },

    loggedIn: {
        type: Boolean,
        default: false
    },

    token: {
        type: String,
    }
}, {
    timestamps: true,
});

let loginModel = mongoose.model('login', loginSchema);

module.exports = loginModel;