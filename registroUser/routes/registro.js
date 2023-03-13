const express = require("express");
const router = express.Router();

const controller = require("../controllers/controller-registro");

const { validateCreate } = require("../middleware/middleware-registro");

//este registro crea ambas entidades , como persona y con esa persona[0] me devuelve un id
//y ese id seria la fk de las entidad usuarios

//una persona tiene varios usuarios
router.post("/create", validateCreate, controller.create);

module.exports = router;