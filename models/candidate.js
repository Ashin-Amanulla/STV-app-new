const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const candidateSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    department: {
        type: String,
    },

    image: {
        type: String,
    },

    // candidateDetails: {
    //     type: {
    //         department: String,
    //         // bloodGroup: String,
    //     },
    //     validate: {
    //         validator: function (value) {
    //             return (this.candidate === true && value) || this.candidate === false
    //         },
    //         message: 'Field "candidateDetails" required when candidate is a candidate'
    //     }
    // },
}, {
    timestamps: true,
});

let candidateModel = mongoose.model('candidate', candidateSchema);

module.exports = candidateModel;