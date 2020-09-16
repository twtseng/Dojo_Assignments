const Author = require("../models/author.model");

module.exports.addAuthor = (req, result) => {
    Author.create(req.body)
    .then(Author => result.json(
        { status: "succeeded"
        , message: `addAuthor succeeded, id=${Author.id}`
        , result: Author}))
    .catch(err => result.json({ status: "failed", message: err }));
};

module.exports.getAllAuthors = (req, result) => {
    Author.find()
    .then(Authors => result.json(
        { status: "succeeded"
        , message: `getAllAuthors succeeded, count=${Authors.length}`
        , result: Authors}))
    .catch(err => result.json({ status: "failed", message: err}))
};

module.exports.getAuthorById = (req, result) => {
    Author.findOne({ _id: req.params.id })
    .then(Author => result.json(
        { status: "succeeded"
        , message: `getAuthorById succeeded, id=${Author.id}`
        , result: Author}))
    .catch(err => result.json({ status: "failed", message: err }));
};

module.exports.updateAuthor = (req, result) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true, useFindAndModify: false })
    .then(Author => result.json(
        { status: "succeeded"
        , message: `updateAuthor succeeded, id=${Author.id}`
        , result: Author}))
    .catch(err => result.json({ status: "failed", message: err }));
};

module.exports.deleteAuthor = (req, result) => {
    Author.deleteOne({ _id: req.params.id })
    .then(Author => result.json(
        { status: "succeeded"
        , message: `deleteAuthor succeeded, id=${req.params.id}`
        , result: Author}))
    .catch(err => result.json({ status: "failed", message: err }));
};
