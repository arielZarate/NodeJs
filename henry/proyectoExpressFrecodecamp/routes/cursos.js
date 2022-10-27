const express = require("express");
const router = express.Router();

const {
  getMessage,
  cursos,
  matematicas,
  programacion,
  lenguaje,
  matematica,
  generico,
} = require("../controllers/cursos");

router.get("/index", getMessage);

router.get("/", cursos);

router.get("/programacion", programacion);

router.get("/matematicas", matematicas);

//por query
/* router.get("/programacion/:lenguaje", lenguaje);
router.get("/matematicas/:tema", matematica);
 */
//modo generico
router.get("/programacion/:lenguaje/:nivel", generico);

module.exports = router;
