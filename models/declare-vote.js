const mongoose = require('mongoose');
const moment = require('moment');


const CandidateSchema = new mongoose.Schema({
    name: { type: String, required: true },
    desc: { type: String, required: true },
    email: { type: String, required: true , unique: true },
    year: { type: String, required: true },
    img: { type: String, required: true },
    ads: [{ type: String, required: true }],
    approve: {
        type: Boolean, default: false,
    }
}, { timestamps: true })

const CandidateModel = mongoose.model('candidate', CandidateSchema);


const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    candidates: [CandidateSchema],
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







ElectionSchema.pre('save', async function () {
    // Loop through each child and save it to the child collection
    for (let i = 0; i < this.positions.length; i++) {
        let data = {title:this.positions[i].title}
        console.log(data);
        const child = new newPostModel(data);
        await child.save();
        // Replace the child object in the parent array with its ID
        // this.positions[i] = child._id;
    }
});






const ElectionModel = mongoose.model('election', ElectionSchema);


module.exports = { ElectionModel, newPostModel, CandidateModel };