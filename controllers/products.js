const Product = require("../models/product.js");

exports.getAddProducts = (req, res, next) => {
  res.render("add-product");
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", { prods: products });
  });
};
