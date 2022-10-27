const express = require("express");
const router = express.Router();
const fs = require("fs");

const { v4: uuid } = require("uuid");

//===== MULTER=======
const multer = require("multer");

//============TODO ESTO SE DEBERIA SETEAR DESDE UNA VISTA EL TIPO , EL FORMATO , EL PESO ,ETC=========================
const extensionTypes = ["png", "jpeg", "jpg", "gif"];
const sizeMaximo = 10000;

const serviceArchivo = async(req, res) => {
    try {
        const { path, size } = req.file;
        console.log(req.file);

        const [tipo, extension] = req.file.mimetype.split("/");

        // =================VALIDAMOS EXTENSION Y PESO======================
        if (!extensionTypes.includes(extension)) {
            throw res.send("Formato no permitido");
        }

        if (size > sizeMaximo) {
            throw res.send("Tamaño de archivo muy grande ");
        }

        //=====UUID=========

        const UID = uuid();

        //new FILENAME

        // console.log(" Aca esta el path :" + path);

        const filename = `${UID}.${extension}`;
        const fileNameOut = `${"public/images"}/${filename}`;

        //==========MANEJANDO EL FS=============
        //const readStream = fs.createReadStream(path);
        // readStream.pipe(fs.createWriteStream(fileNameOut));
        fs.createReadStream(path).pipe(fs.createWriteStream(fileNameOut));

        //EL SETTIMEOUT LO PONGO PARA DEMORAR EL BORRADO YA QUE EL FS DEMORA MAS Y MUCHAS VECES TIRA ESE  ERROR AL INTENTAR BORAR EL ARCHIVO QUE UN NO FUE GUARDADO
        setTimeout(() => {
            fs.unlink(path, (err) => {
                if (err)
                    throw res.send("Error: Archivo temporal no ha podido ser eliminado");
                else {
                    console.log("Archivo Borrado");
                }
            });
        }, 1000);
    } catch (e) {
        if (e) throw e;
    }
};

//=========middleware==============

const upload = multer({ dest: "public/tmp" }).single("file");

router.post("/", upload, serviceArchivo);

module.exports = router;