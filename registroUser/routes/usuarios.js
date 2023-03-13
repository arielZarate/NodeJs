var express = require("express");
var router = express.Router();
const controller = require("../controllers/controller-usuarios");

router.get("/confirm/:uuid", controller.confirmCorreo);
//router.get("/all", controller.getAll);
module.exports = router;