const express = require("express");
const router = express.Router();
const controller = require("../controllers/productos");

router.get("/all", controller.getAll);
router.get("/:id", controller.single);
router.post("/create", controller.create);
router.put("/modify/:id", controller.modify);
router.delete("/delete/:id", controller.deleted);

module.exports = router;