const UserController = require("../controllers/user.controller")

module.exports = app => {
    app.get("/api/users", UserController.getAllUsers);
    app.put("/api/users", UserController.addUser);
    app.get("/api/users/:id", UserController.getUserById);
    app.delete("/api/users/:id", UserController.deleteUser);
    app.patch("/api/users/:id", UserController.updateUser);
}