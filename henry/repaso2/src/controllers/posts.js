//IMPORTA DESDE CONTROLLER USER pero deberia ser un archivo POSTS
const services = require("../models/posts");

//ESTa ruta maneja los posteos
const create = (req, res) => {
  //notar el try catch
  try {
    const { userId, title, contents } = req.body; //destructura
    if (!userId || !title || !contents)
      throw new Error("falta info"); //lanza un error
    else {
      const newPost = services.postUser(userId, title, contents);
      return res.status(200).send(JSON.stringify(newPost));
    }
  } catch (error) {
    //si hay erro dispara por e catch
    return res.status(400).json(error.message);
  }
};

module.exports = { create };
