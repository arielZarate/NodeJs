const services = require("../models/users");

const getAll = (req, res) => {
  const { name } = req.query;

  if (name) {
    //llamo a la funcion que esta en mi service conectada a la bd
    const userByName = services.getUsersByName(name);
    if (userByName["error"]) {
      return res.status(400).json(userByName);
    } else {
      return res.json(userByName);
    }
  } else {
    const users = services.allUsers();
    if (users["error"]) return res.status(400).json(users);
    return res.json(users);
  }
};

const create = (req, res) => {
  const { name, lastName, mail } = req.body;

  if (!name || !lastName || !mail) return res.status(400).json("Faltan datos");
  else {
    const user = services.createUser(name, lastName, mail);
    return res.json(user);
  }
};

const single = (req, res) => {
  const { id } = req.params;

  const user = services.getUserById(id);

  if (user["error"]) return res.status(400).json(user);
  else {
    return res.json(user);
  }
};

const update = (req, res) => {
  const { name, lastName, mail } = req.body;
  const { id } = req.params;

  if (!id || !name || !lastName || !mail) {
    return res.status(400).json("Faltan datos");
  } else {
    const user = services.updateUser(id, name, lastName, mail);
    if (user["error"]) {
      return res.status(400).json(user);
    } else {
      return res.json(user);
    }
  }
};

/* const deleteUser = (req, res) => {
  let { id } = req.params;

  console.log(id);

  const delUser = services.deleteUser(id);

  if (delUser["error"]) return res.status(400).json(delUser);
  else {
    return res.status(200).json(delUser);
  }
}; */

const deleteUser = (req, res) => {
  const { id } = req.params;

  const delUser = services.deletedUser(id);

  if (delUser["error"]) return res.status(400).json(delUser);
  else {
    return res.json(delUser);
  }
};

module.exports = { getAll, create, single, update, deleteUser };
