const mongoose = require ('mongoose');

const EntrySchema = new mongoose.Schema({
    subject : {
        type: String
    },
    description: {
        type:String
    },
    hardshipSolution: {
        type: String
    }
});

const Entry = mongoose.model('Entry', EntrySchema);
module.exports = Entry;