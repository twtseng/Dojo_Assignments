const mongoose = require("mongoose")

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, "name must be at least 4 chars"],
        required: [true, "name field is required"]
    }
});

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;