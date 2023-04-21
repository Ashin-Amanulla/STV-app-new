const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    candidates: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'candidates'
        },
    ],
    winner: {

        type: mongoose.Schema.Types.ObjectId,
        ref: 'candidates',
        default: null
    }
})

const newPostModel = mongoose.model('newpost', PostSchema)

const ElectionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
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
    },
    positions: [PostSchema]

}, { timestamps: true });

const ElectionModel = mongoose.model('election', ElectionSchema);



ElectionSchema.pre('save', async function () {
    // Loop through each child and save it to the child collection
    for (let i = 0; i < this.positions.length; i++) {
        const child = new newPostModel(this.positions[i]);
        await child.save();
        // Replace the child object in the parent array with its ID
        this.positions[i] = child._id;
    }
});









module.exports = ElectionModel;