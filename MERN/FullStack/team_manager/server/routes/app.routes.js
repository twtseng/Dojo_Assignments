const PlayerController = require("../controllers/player.controller")

module.exports = app => {
    app.get("/api/games", PlayerController.getAllGames);
    app.put("/api/games", PlayerController.addGame);
    app.delete("/api/games/:id", PlayerController.deleteGame);
    app.get("/api/playerstatusoptions", PlayerController.getPlayerStatusOptions);
    app.get("/api/players", PlayerController.getAllPlayers);
    app.put("/api/players", PlayerController.addPlayer);
    app.get("/api/players/:id", PlayerController.getPlayerById);
    app.delete("/api/players/:id", PlayerController.deletePlayer);
    app.patch("/api/players/:id", PlayerController.updatePlayer);
}