const mongoose = require("mongoose");

const noSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    rua: {
        type: String,
        require: true
    },
    total: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: true
    },
});

module.exports = mongoose.model("No", noSchema)