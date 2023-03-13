const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller-auth");

router.post("/", controller.auth);

module.exports = router;