const JokeController = require("../controllers/jokes.controller")

module.exports = app => {
    app.get("/api/jokes/", JokeController.getAllJokes);
    app.get("/api/jokes/:id", JokeController.getJokeById);
    app.put("/api/jokes/new", JokeController.createJoke);
    app.patch("/api/jokes/update/:id", JokeController.updateJoke);
    app.delete("/api/jokes/delete/:id", JokeController.deleteJoke);
}