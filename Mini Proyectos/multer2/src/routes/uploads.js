const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

//========middleware==========
//===========MULTER===============

//opcion 1 la mas facil, pero no lo guarda con la extension

//const config = { dest: "public/images" };
//const upload = multer(config).single("filename");

//opcion 2 que usamos el propio motor de almacenamiento y lo guardamos con disk storage y usamos el origilname
//===storage=========
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "public/images");
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    },
});

//OTRAS OPCIONES
//limit:filesize:10000 es un mb
const middleware = multer({
    storage,
    //=========VALIDO EL TAMÑO DEL ARCHIVO============l
    limits: { fileSize: 36000 },

    //====VALIDO EL TIPO DE ARCHIVO========
    fileFilter(req, file, cb) {
        const filetypes = /jpg|png|jpeg|gif/;

        //=====NOTA=======
        //["png", "gif"];
        // SI USO ARRAYS DEBO USAR INCLUDES
        //======FIN DE NOTA=========
        //testeo si la extension del file esta ne el archivo filetypes
        const mimetype = filetypes.test(file.mimetype);
        //de esta forma obtengo la extension del archivo original
        const extname = filetypes.test(path.extname(file.originalname));
        if (mimetype && extname) {
            return cb(null, true);
        } else {
            return cb("Error: debe ser un archivo con la extension valida");
        }
    },
}).single("filename");

//routes

const enviar = function(req, res) {
    //res.render("index.hbs");
    console.log(req.file);
    res.send("file upload");
};

router.post("/", middleware, enviar);

module.exports = router;