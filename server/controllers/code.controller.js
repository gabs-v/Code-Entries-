const Entry = require('../models/code.model');

module.exports = {

    findAllEntries: (req,res) => {
        Entry.find()
        .then((allEntries) => {
            console.log(allEntries)
            res.json({allEntries})
        })
        .catch((err) => console.log(err))
    },

    createEntry:  (req,res) => {
        Entry.create(req.body)
        .then((newEntry) =>{
            console.log(newEntry)
            res.json({newEntry})
        })
        .catch((err) => console.log(err))
    },

}

