const express = require("express");
const router = express.Router();

//=============Middleware=======================
const {
    validateCreate,
    validateModify,
} = require("../middlewares/midleware-productos");
//====================================================================
const controller = require("../controllers/productos");

router.get("/all", controller.getAll);
router.get("/:id", controller.single);
router.post("/create", validateCreate, controller.create);
router.put("/modify/:id", validateModify, controller.modify);
router.delete("/delete/:id", controller.deleted);

module.exports = router;