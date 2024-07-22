const mongoose = require("mongoose");

const productInfo = new mongoose.Schema({
    productName: {type: String, required: true},
    productDescription: {type: String, required: true},
    productPrice: {type: Number, required: true},
})

module.exports = mongoose.model('productInfo', productInfo)