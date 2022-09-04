const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const main = require("require-main-filename")();

//next permite á request continuar ao seguite middle (se non se usa debe acabar con unha response)
const app = express();

const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");

//crea un middleware para convertir o body da fiorm da request a json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//Uso das rutas de router en vez de app.
//"/admin" filtra so as q comecen por eso
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(main, "..", "views", "404.html"));
});

app.listen(3000);
