const express = require("express");
const path = require("path");

const main = require("require-main-filename")();

const router = express.Router();

const products = [];

// "/" recolleria todos os path que comezan por /. Por eso hai q usar antes os outros NOTA: solo con use, get e post usan a ruta exacta polo que da igual
//ao poñer ao final "/" e no usar next non se executara o seguinte middle
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(main, "..", "views", "add-product.html"));
});

//post get limita a use para so peticions get/post
//o body da peticion ou payload debe parsearse a json (neste caso con libreria)
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
