const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        minlength: [4, "Setup must be at least 4 chars"],
        required: [true, "Hey! You didn't include a setup!!!"]
    },
    punchline: {
        type: String,
        minlength: [5, "Punchline must be at least 5 chars"],
        required: [true, "Hey! You didn't include a punchline!!!"]
    }
},
{ timestamps: true });

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;