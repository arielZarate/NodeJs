const express = require("express");
const router = express.Router();

let personas = [
    { nombre: "Juan", edad: 24 },
    { nombre: "Sandra", edad: 38 },
    { nombre: "Jose", edad: 67 },
];

function enviar(req, res, next) {
    res.render("inicio", {
        title: "HandlebarsxAriel",
        mensaje: "Engine views",
        datos: personas,
    });
    //res.send("Welcome Ariel a handlebar");
}

router.get("/", enviar);

module.exports = router;