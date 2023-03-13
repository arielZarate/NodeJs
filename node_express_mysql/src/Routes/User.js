const express = require("express");
const router = express.Router();
const { get, create, getById } = require("../Controllers/User");

router.get("/", get);

router.get("/:id", getById);
router.put("/:id");
router.delete("/:id");
router.post("/", create);
module.exports = router;
