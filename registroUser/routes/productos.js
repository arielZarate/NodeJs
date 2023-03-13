const express = require("express");
const router = express.Router();
const multer = require("multer");

const config = { dest: "/public/tmp" };
// public\tmp
const upload = multer(config);
const controller = require("../controllers/controller-productos");

router.post("/create", upload.single("filename"), controller.create);

module.exports = router;
