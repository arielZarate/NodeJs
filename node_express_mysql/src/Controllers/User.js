const User = require("../Models/User");

const get = async (req, res) => {
  try {
    const response = await User.findAll();
    res.json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error("id undefined");
    } else {
      const response = await User.findByPk(id);

      if (!response) {
        throw new Error("no existen registros para ese ID");
      }
      res.json(response);
    }
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

const create = async (req, res) => {
  const { name, birthday } = req.body;

  try {
    if (!name || !birthday) {
      throw new Error("Alguno de los datos del cuerpo estan undefined");
    } else {
      const newObj = { name, birthday };

      const response = await User.create(newObj);
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

module.exports = { get, create, getById };
