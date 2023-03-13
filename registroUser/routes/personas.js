const express = require("express");
const router = express.Router();

const controller = require("../controllers/controller-personas");
router.get("/single/:id", controller.single);
router.post("/create", controller.create);
router.put("/modify/:id", controller.modify);
router.get("/all", controller.all);
router.delete("/deleted/:id", controller.deleted);

module.exports = router;