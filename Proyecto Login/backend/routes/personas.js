const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();

const controller = require("../controllers/personas");
//solamente llamo al metodo debtro del controlador
router.get("/all", controller.getAll);

router.get("/:id", controller.single);

router.post("/create", controller.create);

router.put("/modify/:id", controller.modify);

router.delete("/delete/:id", controller.delet);
/* router.put("/update/:id", controller.update); */
module.exports = router;