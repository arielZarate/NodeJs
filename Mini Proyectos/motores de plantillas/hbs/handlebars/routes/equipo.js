const express = require("express");
const router = express.Router();

const equipo = (req, res) => {
    res.render("equipo", {
        equipo: [{
                id: 1,
                nombre: "Juanito",
                habilidad: ["Javascript", "Node.js"],
            },
            {
                id: 2,
                nombre: "Pedrito",
                habilidad: ["Php", "Laravel"],
            },
        ],
    });
};

router.get("/", equipo);

module.exports = router;