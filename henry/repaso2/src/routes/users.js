const express = require("express");

router = express.Router();

const controllers = require("../controllers/users");

// import all controllers
// import SessionController from './app/controllers/SessionController';

// Add routes

router.get("/", controllers.getAll);

router.post("/", controllers.create);
router.get("/:id", controllers.single);
router.put("/:id", controllers.update);
router.delete("/:id", controllers.deleteUser);

module.exports = router;
