const express = require("express");
const router = express.Router();

const {
    get,
    create,
    getById,
    deleted,
    updated,
} = require("../controllers/lenguajes");
const middleware = require("../middleware/lenguajes");

//========routes=================

router.get("/", get);
router.post("/create", middleware.validateCreate, create);
router.post("/:id", getById);
router.delete("/delete/:id", deleted);
router.put("/modify/:id", middleware.validateModify, updated);

module.exports = router;