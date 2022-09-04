const express = require("express");
const path = require("path");

const main = require("require-main-filename")();

const adminData = require("./admin.js");

const router = express.Router();

//express xa se encarga dos headers, anqu se pod configurar
//__dirname reprsenta o path actual deste archivo, polo que hai q ir atras
router.get("/", (req, res, next) => {
  console.log(adminData.products);
  res.sendFile(path.join(main, "..", "views", "shop.html"));
});

module.exports = router;
