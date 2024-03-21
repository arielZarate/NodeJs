const express = require("express");
const router = express.Router();
const {
  createMascota,
  getMascotas,
  mascotaById,
  deleteMascota,
  updateMascota,
} = require("../controllers/Mascota-controller");

const middleware = require("../middlewares/videogame-middleware");

router.get("/:id", mascotaById); //trae por id
router.get("/:name", getMascotas); //trae por query o sea el name
router.get("/", getMascotas); //trae todos
router.post("/", createMascota); //crea un videogame

//agregados
router.put("/:id", updateMascota); //actualiza un videogame
router.delete("/:id", deleteMascota); //elimina un videogame

module.exports = router;
