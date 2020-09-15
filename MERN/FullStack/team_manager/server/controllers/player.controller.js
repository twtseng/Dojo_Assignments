const models = require("../models/player.model");

module.exports.addGame = (req, result) => {
    models.Game.create(req.body)
    .then(obj => result.json(
        { status: "succeeded"
        , message: `addGame succeeded, id=${obj._id}`
        , result: obj}))
    .catch(err => result.json({ status: "failed", message: err }));
};
module.exports.deleteGame = (req, result) => {
    models.Game.deleteOne({ _id: req.params.id })
    .then(obj => result.json(
        { status: "succeeded"
        , message: `deleteGame succeeded, id=${req.params.id}`
        , result: obj}))
    .catch(err => result.json({ status: "failed", message: err }));
};
module.exports.getAllGames = (req, result) => {
    models.Game.find()
    .then(objs => result.json(
        { status: "succeeded"
        , message: `getAllGames succeeded, count=${objs.length}`
        , result: objs}))
    .catch(err => result.json({ status: "failed", message: err }));
};

module.exports.getPlayerStatusOptions = (req, result) => {
    result.json(
        { status: "succeeded"
        , message: `getPlayerStatusOptions succeeded`
        , result: models.PlayerStatus});
};

module.exports.addPlayer = (req, result) => {
    models.Player.create(req.body)
    .then(obj => result.json(
        { status: "succeeded"
        , message: `addPlayer succeeded, id=${obj._id}`
        , result: obj}))
    .catch(err => result.json({ status: "failed", message: err }));
};
module.exports.deletePlayer = (req, result) => {
    models.Player.deleteOne({ _id: req.params.id })
    .then(obj => result.json(
        { status: "succeeded"
        , message: `deletePlayer succeeded, id=${req.params.id}`
        , result: obj}))
    .catch(err => result.json({ status: "failed", message: err }));
};
module.exports.getAllPlayers = (req, result) => {
    models.Player.find()
    .then(objs => result.json(
        { status: "succeeded"
        , message: `getAllPlayers succeeded, count=${objs.length}`
        , result: objs}))
    .catch(err => result.json({ status: "failed", message: err }));
};
module.exports.getPlayerById = (req, result) => {
    models.Player.findOne({ _id: req.params.id })
    .then(obj => result.json(
        { status: "succeeded"
        , message: `getPlayerById succeeded, id=${obj._id}`
        , result: obj}))
    .catch(err => result.json({ status: "failed", message: err }));
};

module.exports.updatePlayer = (req, result) => {
    console.log("updatePlayer:", JSON.stringify(req.body));
    models.Player.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true, useFindAndModify: false })
    .then(obj => result.json(
        { status: "succeeded"
        , message: `updatePlayer succeeded, id=${obj._id}`
        , result: obj}))
    .catch(err => result.json({ status: "failed", message: err }));
};
