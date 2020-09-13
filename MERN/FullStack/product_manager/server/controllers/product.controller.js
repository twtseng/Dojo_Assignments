const Product = require("../models/product.model");

module.exports.addProduct = (req, result) => {
    Product.create(req.body)
    .then(product => result.json(
        { status: "succeeded"
        , message: `addProduct succeeded, id=${product.id}`
        , result: product}))
    .catch(err => result.json({ status: "failed", error: err }));
};

module.exports.getAllProducts = (req, result) => {
    Product.find()
    .then(products => result.json(
        { status: "succeeded"
        , message: `getAllProducts succeeded, count=${products.length}`
        , result: products}))
    .catch(err => result.json({ status: "failed", message: err}))
};

module.exports.getProductById = (req, result) => {
    Product.findOne({ _id: req.params.id })
    .then(product => result.json(
        { status: "succeeded"
        , message: `getProductById succeeded, id=${product.id}`
        , result: product}))
    .catch(err => result.json({ status: "failed", error: err }));
};

module.exports.updateProduct = (req, result) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(product => result.json(
        { status: "succeeded"
        , message: `updateProduct succeeded, id=${product.id}`
        , result: product}))
    .catch(err => result.json({ status: "failed", error: err }));
};

module.exports.deleteProduct = (req, result) => {
    Product.deleteOne({ _id: req.params.id })
    .then(product => result.json(
        { status: "succeeded"
        , message: `deleteProduct succeeded, id=${req.params.id}`
        , result: product}))
    .catch(err => result.json({ status: "failed", error: err }));
};
