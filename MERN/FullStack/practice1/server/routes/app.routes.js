const UserController = require("../controllers/user.controller")
const LoginGithub = require("../controllers/login.github.controller")
const Login = require("../controllers/login.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = app => {
    app.get("/api/users", UserController.getAllUsers);
    app.put("/api/users", UserController.addUser);
    app.delete("/api/users/:id", UserController.deleteUser);
    app.patch("/api/users/:id", UserController.updateUser);
    app.get("/login/github_redirect", LoginGithub.redirect);
    app.get("/login/github_login", LoginGithub.login);
    app.get("/login/getauthenticateduser", Login.getAuthenticatedUser);
    app.post("/login/logout", Login.logout);
    app.patch("/login/registeruser", Login.registerUser);
}