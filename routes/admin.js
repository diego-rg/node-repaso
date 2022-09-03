const express = require("express");

const router = express.Router();

// "/" recolleria todos os path que comezan por /. Por eso hai q usar antes os outros NOTA: solo con use, get e post usan a ruta exacta polo que da igual
//ao poñer ao final "/" e no usar next non se executara o seguinte middle
router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Send</button></form>'
  );
});

//post get limita a use para so peticions get/post
//o body da peticion ou payload debe parsearse a json (neste caso con libreria)
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
