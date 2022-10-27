const express = require("express");
const router = express.Router();

const servicio = (req, res) => {
    res.render("servicio", {
        servicio: {
            estado: false,
            nombre: "Servicio de programación",
        },
        servicio: {
            estado: true,
            nombre: "Servicio de ciencia de datos",
        },
    });
};

router.get("/", servicio);

module.exports = router;