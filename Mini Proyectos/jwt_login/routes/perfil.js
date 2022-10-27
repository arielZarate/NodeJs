const express = require("express");
const router = express.Router();

const controller = require("../controllers/controller-perfil");

router.get("/", controller.getProfile);

module.exports = router;