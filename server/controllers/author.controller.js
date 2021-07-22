const Author = require("../models/author.model");

// CREATE
module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch(err => res.json({message: "Something went wrong when adding a Author to the database!!", err: err}))
}

// READ ALL
module.exports.findAllAuthor = (req, res) => {
    Author.find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.json({message: "Something went wrong when grabbing all Authors!!", err: err}))
}

// READ ONE
module.exports.findOneAuthor = (req, res) => {
    Author.findOne({_id: req.params._id})
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => res.json({message: "Something went wrong when grabbing one Author!!", err: err}))
}

// UPDATE
module.exports.updateAuthor = (req, res) => {
    Author.updateOne({_id: req.params._id}, req.body, {runValidators: true})
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => res.json({message: "Something went wrong when updating a Author!!", err: err}))
}

// DELETE
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params._id})
        .then(res.json({message: "Author was successfully removed!"}))
        .catch(err => res.json({message: "Something went wrong when deleting a Author from the database!!", err: err}))
}