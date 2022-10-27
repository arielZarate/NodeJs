const express = require("express");

router = express.Router();

const controllers = require("../controllers/posts");

// import all controllers

// Add routes

//router.get("/", controllers.getAll);

router.post("/", controllers.create);
//router.get("/:id", controllers.single);
//router.put("/:id", controllers.update);
//router.delete("/:id", controllers.deletePost);

module.exports = router;
