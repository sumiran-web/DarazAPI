const mongoose = require('mongoose');
const collectionSchema = mongoose.Schema({
    _title: String,
    _intro: String,
    image:String
});

module.exports = mongoose.model('tbl_collection', collectionSchema);