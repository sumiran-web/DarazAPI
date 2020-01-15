const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    _productName: String,
    _productPrice: Number
});

module.exports = mongoose.model('tbl_product', productSchema);