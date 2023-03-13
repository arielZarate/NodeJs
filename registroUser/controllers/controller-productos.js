const service = require("../models/productos");
const serviceProductos = require("../services/productos");
//controladores

const all = (req, res) =>
  service
    .getAll()
    .then((response) => res.json(response))
    .catch((e) => res.status(500).json(e));

const single = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await service.getSingle(id);
    res.json(result);
  } catch (e) {
    res.status(500).json(e);
  }
};

//utilizoelserviciode productos
/* const create = (req, res) =>
    service
    .create(req.body)
    .then((response) => res.json(response))
    .catch((e) => res.json(e)); */

const modify = (req, res) =>
  service
    .modify(req.params.id, req.body)
    .then((response) => res.json(response))
    .catch((error) => res.status(500).json(error));
const deleted = (req, res) =>
  service
    .deleted({ id: req.params.id })
    .then((response) => res.json(response))
    .catch((error) => res.status(500).json(error));

const create = (req, res) => {
  try {
    const result = serviceProductos.createProducto(req.body, req.file);

    //console.log()
    //res.send().status();
    //res.sendStatus();
    //res.json();
    //console.log(req.file);
    res.json(result);
  } catch (e) {
    //si existe un error llega propagado hasta aca
    res.sendStatus(500);
  }
};

module.exports = { create, modify, all, single, deleted };
