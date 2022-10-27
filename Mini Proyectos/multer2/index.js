const express = require("express");
const path = require("path");
//====app========
const app = express();
app.set("port", 3000);

//rutas publicas staticas

app.use(express.static(path.join(__dirname, "public")));

const uploads = require("./src/routes/uploads");

app.use("/upload", uploads);
//MOTOR DE VISTAS
/* const hbs = require("hbs");
//aca guardo donde esta la carpeta views , uno los directorios
app.set("views", path.join(__dirname, "views"));
app.set("views engine", "hbs"); */

//LLAMAR AL PUERTO
app.listen(app.get("port"), () => {
    console.log("iniciando servivor en el puerto " + `${app.get("port")}`);
});