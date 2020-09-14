const AuthorController = require("../controllers/author.controller")

module.exports = app => {
    app.get("/api/authors/", AuthorController.getAllAuthors);
    app.get("/api/authors/:id", AuthorController.getAuthorById);
    app.put("/api/authors/add", AuthorController.addAuthor);
    app.patch("/api/authors/update/:id", AuthorController.updateAuthor);
    app.delete("/api/authors/delete/:id", AuthorController.deleteAuthor);
}