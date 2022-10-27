const express = require("express");
const router = express.Router();

const index = (req, res) => {
    res.render("index", { titulo: "Inicio con HBS" });
};

router.get("/", index);

module.exports = router;