// Configuración inicial
var createError = require("http-errors");
const express = require("express");
var path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const index = require("./routes/index");
const equipo = require("./routes/equipo");
const servicio = require("./routes/servicio");

// Motor de plantilla
const hbs = require("hbs");
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(__dirname + "/views/partials", function(err) {});

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

//carpeta static paralos archivos publicos
app.use(express.static(__dirname + "/public"));

// Aquí detallar rutas

app.use("/index", index);
app.use("/equipo", equipo);
app.use("/servicio", servicio);

app.use((req, res, next) => {
    /*  res.status(404).render("404", {
                    titulo: "404",
                    descripcion: "Página no encontrada",
                }); */
    res.redirect("https://http.cat/404");
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});