const ProductController = require("../controllers/product.controller")

module.exports = app => {
    app.get("/api/products/", ProductController.getAllProducts);
    app.get("/api/products/:id", ProductController.getProductById);
    app.put("/api/products/add", ProductController.addProduct);
    app.patch("/api/products/update/:id", ProductController.updateProduct);
    app.delete("/api/products/delete/:id", ProductController.deleteProduct);
}