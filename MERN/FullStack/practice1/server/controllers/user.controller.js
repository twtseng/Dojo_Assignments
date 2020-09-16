const models = require("../models/user.model");

module.exports.addUser = (req, result) => {
    models.User.create(req.body)
    .then(obj => result.json(
        { status: "succeeded"
        , message: `addUser succeeded, id=${obj._id}`
        , result: obj}))
    .catch(err => result.json({ status: "failed", message: err }));
};

module.exports.deleteUser = (req, result) => {
    models.User.deleteOne({ _id: req.params.id })
    .then(obj => result.json(
        { status: "succeeded"
        , message: `deleteUser succeeded, id=${req.params.id}`
        , result: obj}))
    .catch(err => result.json({ status: "failed", message: err }));
};
module.exports.getAllUsers = (req, result) => {
    models.User.find()
    .then(objs => result.json(
        { status: "succeeded"
        , message: `getAllUsers succeeded, count=${objs.length}`
        , result: objs}))
    .catch(err => result.json({ status: "failed", message: err }));
};

module.exports.updateUser = (req, result) => {
    console.log("updateUser:", JSON.stringify(req.body));
    models.User.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true, useFindAndModify: false })
    .then(obj => result.json(
        { status: "succeeded"
        , message: `updateUser succeeded, id=${obj._id}`
        , result: obj}))
    .catch(err => result.json({ status: "failed", message: err }));
};