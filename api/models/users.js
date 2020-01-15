const mongoose = require('mongoose');
const darazUsers = mongoose.Schema({
    _userName:String,
    _userEmail:String,
    _userPhone:String,
    _userPassword:String

});

module.exports = mongoose.model('tbl_users', darazUsers);