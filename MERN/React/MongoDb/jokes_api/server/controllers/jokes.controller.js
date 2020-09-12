const Joke = require("../models/jokes.model");

module.exports.getAllJokes = (req, result) => {
    Joke.find()
    .then(allJokes => result.json({ status: "succeeded", jokes: allJokes}))
    .catch(err => result.json({ status: "failed", error: err }));
};

module.exports.getJokeById = (req, result) => {
    Joke.findOne({ _id: req.params.id })
    .then(joke => result.json({ status: "succeeded", joke: joke}))
    .catch(err => result.json({ status: "failed", error: err }));
};

module.exports.createJoke = (req, result) => {
    console.log(`createJoke req.body: ${JSON.stringify(req.body)}`);
    Joke.create(req.body)
    .then(joke => result.json({ status: "succeeded", joke: joke}))
    .catch(err => result.json({ status: "failed", error: err }));
};

module.exports.updateJoke = (req, result) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true })
    .then(joke => result.json({ status: "succeeded", joke: joke}))
    .catch(err => result.json({ status: "failed", error: err }));
};

module.exports.deleteJoke = (req, result) => {
    Joke.deleteOne({ _id: req.params.id })
    .then(joke => result.json({ status: "succeeded", joke: joke}))
    .catch(err => result.json({ status: "failed", error: err }));
};

