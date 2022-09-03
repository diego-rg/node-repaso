const express = require("express");

const router = express.Router();

//express xa se encarga dos headers, anqu se pod configurar
router.get("/", (req, res, next) => {
  res.send("<h1>Hola</h1>");
});

module.exports = router;
