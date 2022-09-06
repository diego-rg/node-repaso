const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//next permite á request continuar ao seguite middle (se non se usa debe acabar con unha response)
const app = express();

app.set("view engine", "pug");
app.set("views", "views");

const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");

const errorControllers = require("./controllers/errors.js");

//crea un middleware para convertir o body da fiorm da request a json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//Uso das rutas de router en vez de app.
//"/admin" filtra so as q comecen por eso
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorControllers.getErrorPage);

app.listen(3000);
