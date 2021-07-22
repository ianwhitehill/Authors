// bring in the controls from the controller
const AuthorController = require("../controllers/author.controller");

module.exports = app => {
    // CREATE
    app.post("/api/author/create", AuthorController.createAuthor);
    // READ ALL
    app.get("/api/author", AuthorController.findAllAuthor);
    // READ ONE
    app.get("/api/author/:_id", AuthorController.findOneAuthor);
    // UPDATE
    app.put("/api/author/update/:_id", AuthorController.updateAuthor);
    // DELETE
    app.delete("/api/author/delete/:_id", AuthorController.deleteAuthor);
}