const mongoose = require('mongoose');

const ElectionSchema = new mongoose.Schema({
    nomination_start: {
        type: String,
        required: true
    },
    nomination_end: {
        type: String,
        required: true
    },

    voting_start: {
        type: String,
        required: true
    },
    voting_end: {
        type: String,
        required: true
    },
    result_day: {
        type: String,
        required: true
    }

});
const ElectionModel = mongoose.model('election', ElectionSchema);
  module.exports = ElectionModel ;