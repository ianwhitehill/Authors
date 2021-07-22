const mongoose = require("mongoose");

//Example 
//
//description: {
//        type: String, or Number
//        required: [true, "Description is required!"],
//        minlength: [10, "Description must be longer!"], just min for number
//        maxlength: [1000, "Description must be less than 1000 characters!"]
//    },

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Required"],
        minlength: [3, "Name requires a min of 3 characters!"]
    },
}, {timestamps: true})

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;