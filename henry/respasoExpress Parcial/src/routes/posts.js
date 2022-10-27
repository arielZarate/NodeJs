//posts

//- get -->  trae todos los usuarios
//- get --> /:id    un solo users
//- post--> crea un usuario
//- delete--> elimina un usuario
//- put --> actualiza un usuario

const express = require("express");
const router = express.Router();

//IMPORTA DESDE CONTROLLER USER pero deberia ser un archivo POSTS
const { postUser } = require("../controllers/users");

//ESTa ruta maneja los posteos
router.post("/", (req, res) => {
  //notar el try catch
  try {
    const { userId, title, contents } = req.body; //destructura
    if (!userId || !title || !contents)
      throw new Error("falta info"); //lanza un error
    else {
      const newPost = postUser(userId, title, contents);
      return res.status(200).send(JSON.stringify(newPost));
    }
  } catch (error) {
    //si hay erro dispara por e catch
    return res.status(400).json(error.message);
  }
});

module.exports = router;
