const mongoose = require("mongoose")

const GameSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, "name must be at least 2 chars"],
        required: [true, "name field is required"]
    }
});
module.exports.Game = mongoose.model("Game", GameSchema);

const PlayerStatus = ["Playing","Not Playing","Undecided"];
module.exports.PlayerStatus = PlayerStatus;

const GamePlayerSchema = new mongoose.Schema({
    game_id: {
        type: String,
        required: [true, "game_id field is required"]
    },
    status: {
        type: String,
        required: [true, "status field is required"],
        validate: { 
            validator: status => {
                return PlayerStatus.includes(status)
            },
            message: `status must be one of: ${PlayerStatus}`
        }
    },
});

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, "name must be at least 2 chars"],
        required: [true, "name field is required"]
    },
    preferred_position: {
        type: String,
        minlength: [3, "preferred_position must be at least 4 chars"],
        required: [true, "preferred_position field is required"]
    },
    game_status: [GamePlayerSchema]
});
module.exports.Player = mongoose.model("Player", PlayerSchema);
