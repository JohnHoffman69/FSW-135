const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    },
    years: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Inventory', inventorySchema);