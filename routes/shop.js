const express = require("express");
const path = require("path");

const rootDir = require("require-main-filename")();

const router = express.Router();

//express xa se encarga dos headers, anqu se pod configurar
//__dirname reprsenta o path actual deste archivo, polo que hai q ir atras
router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "..", "views", "shop.html"));
});

module.exports = router;
