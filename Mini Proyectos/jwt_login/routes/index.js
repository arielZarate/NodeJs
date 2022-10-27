var express = require("express");
var router = express.Router();
//const md5 = require("md5");
//const sha1 = require("sha1");

/* GET home page. */
router.get("/", async function(req, res, next) {
    res.render("index", { title: "Express" });
});

//console.log(md5("12345"));
//console.log(sha1("1234"));

module.exports = router;