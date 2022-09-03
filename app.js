const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");

//next permite á request continuar ao seguite middle (se non se usa debe acabar con unha response)
const app = express();

//crea un middleware para convertir o body da fiorm da request a json
app.use(bodyParser.urlencoded({ extended: true }));

//Uso das rutas de router en vez de app.
//"/admin" filtra so as q comecen por eso
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Página no encontrada</h1>");
});

app.listen(3000);
