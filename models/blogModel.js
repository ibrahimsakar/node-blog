const mongoose = require("mongoose");

var blogSchema = new mongoose.Schema({

    title           : { type: String, required: "Cannot be empty"},
    commercialTitle : { type: String, required: "Cannot be empty"},
    commercialImage : { type: String, required: "Cannot be empty"},
    contentText      : { type: String, required: "Cannot be empty"},
    date            : { type: Date,   default:  Date.now},
    
});

module.exports = mongoose.model("Blog", blogSchema);