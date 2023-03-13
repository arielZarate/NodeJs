const express = require("express");
const router = express.Router();
const multer = require("multer");
const service = require("../services/productos");

//destino de la carpeta temporal
const config = { dest: "./public/tmp" };
const upload = multer(config);

//const controller = require("../controllers/controller-productos");
//const middleware = require("../middleware/middleware-productos");

//router.post("/create", middleware.validateCreate, controller.create);

const create = (req, res) => {
    try {
        const result = serviceProductos.createProducto(req.body, req.file);
        //console.log(req.file);
        //console.log()
        //res.send().status();
        //res.sendStatus();
        //res.json();
        //console.log(req.file);
        res.json(result);
    } catch (e) {
        //si existe un error llega propagado hasta aca
        res.sendStatus(500);
    }
};

router.post("/create", upload.single("filename"), create);

module.exports = router;