const mongoose = require('mongoose');

const dbschema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    
    code: {
        type: String,
        required: true
    }
});

const Record = mongoose.model('Record',dbschema);

module.exports = Record;