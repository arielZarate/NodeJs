const express = require("express");
const path = require("path");
const multer = require("multer");

//====app========
const app = express();
app.set("port", 3000);

//========middleware==========
//===========MULTER===============

//opcion 1 la mas facil, pero no lo guarda con la extension

//const config = { dest: path.join(__dirname, "public/images") };
//app.use(multer(config).single("filename"));

//opcion 2 que usamos el propio motor de almacenamiento y lo guardamos con disk storage y usamos el origilname
//===storage=========
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, "/public/images"));
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    },
});

//app.use(multer({ storage }).single("filename"));
const middleware = multer({ storage }).single("filename");

//MOTOR DE VISTAS
/* const hbs = require("hbs");
//aca guardo donde esta la carpeta views , uno los directorios
app.set("views", path.join(__dirname, "views"));
app.set("views engine", "hbs"); */

//routes

const enviar = function(req, res) {
    //res.render("index.hbs");
    console.log(req.file);
    res.send("file upload");
};

app.post("/upload", middleware, enviar);

//LLAMAR AL PUERTO
app.listen(app.get("port"), () => {
    console.log("iniciando servivor en el puerto " + `${app.get("port")}`);
});