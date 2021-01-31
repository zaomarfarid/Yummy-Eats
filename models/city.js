const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const citySchema = new Schema({
    name: String,
    food: [{
        name: String,
        price: Number
    }]
})

module.exports = model('City', citySchema)
