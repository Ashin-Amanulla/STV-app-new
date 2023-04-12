const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const votingSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    startTime: {
        type: Date,
        required: true,
    },

    endTime: {
        type: Date,
        required: true
    },

    candidates: {
        type: [
            {
                _id: {
                    type: String,
                    // type: mongoose.Schema.Types.ObjectId,
                    // ref: 'candidate',
                },
                votes: Array,
            }
        ],
    },
}, {
    timestamps: true,
});

let votingModel = mongoose.model('voting', votingSchema);

module.exports = votingModel;