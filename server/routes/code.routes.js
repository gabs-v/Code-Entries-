const EntryController = require('../controllers/code.controller')

module.exports = app => {
    app.get('/api/entries', EntryController.findAllEntries);
    app.post('/api/entries', EntryController.createEntry);
}