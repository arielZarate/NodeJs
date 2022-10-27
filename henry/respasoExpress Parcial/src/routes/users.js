//user

//- get -->  trae todos los usuarios
//- get --> /:id    un solo users
//- post--> crea un usuario
//- delete--> elimina un usuario
//- put --> actualiza un usuario

const express = require("express");
const router = express.Router();

//estas son funciones importadas desde el controlador
const {
  getUsers,
  getUsersByName,
  postUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/users");

//rutas
/* router.get("/", (req, res) => {
  const users = getUsers();
  return res.status(200).send(users);
});
 */

/* 
          ||
          ||
          \/

          todo en una sola ruta--> por getUsersByName o por getUsers()
      
 */
router.get("/", (req, res) => {
  const { name } = req.query;

  if (name) {
    const users = getUsersByName(name);
    //COMO users tiene 2 opciones , puede que devulva algo o que tire error
    if (users["error"]) return res.status(400).json(users);
    else {
      return res.status(200).json(users);
    }
  } else {
    const users = getUsers();
    return res.status(200).json(users);
  }
});

router.post("/", (req, res) => {
  const { name, lastName, mail } = req.body;
  if (!name || !lastName || !mail)
    return res.status(400).json({ error: "falta info" });
  else {
    const newUser = postUsers(name, lastName, mail);
    return res.status(200).json(newUser);
  }
});

//GET BY ID
router.get("/:id", (req, res) => {
  const { id } = req.params;

  const user = getUserById(id);

  if (user["error"]) return res.status(400).json(user);
  else {
    return res.status(200).json(user);
  }
});

//PUT
router.put("/", (req, res) => {
  const { id, name, lastName, mail } = req.body;

  if (!name || !lastName || !mail || !id)
    return res.status(400).json({ error: "falta informacion" });
  else {
    const upUser = updateUser(id, name, lastName, mail);
    if (upUser["error"]) return res.status(400).json(upUser);
    else {
      return res.status(200).json(upUser);
    }
  }
});

//DELETE
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const delUser = deleteUser(id);

  if (delUser["error"]) return res.status(400).json(delUser);
  else {
    return res.status(200).json(delUser);
  }
});

module.exports = router;
