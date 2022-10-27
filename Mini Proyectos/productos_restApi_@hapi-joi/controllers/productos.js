const service = require("../models/productos");

const getAll = (req, res, next) => {
    return service
        .get({})
        .then((r) => res.json(r))
        .catch((error) => res.status(500).res.json("Error interno de servidor"));
};

const single = (req, res, next) => {
    id = req.params.id;
    return service
        .get({ id })
        .then((r) => res.json(r))
        .catch((error) => res.status(500).res.json("Error interno de servidor"));
};

const create = (req, res, next) => {
    const obj = ({ id, nombre, precio, stock } = req.body);
    return service
        .create(obj)
        .then((r) => res.json(r))
        .catch((error) => res.json("Error al ingresar datos en la tabla"));
};
const modify = (req, res, next) => {
    const obj = ({ nombre, precio, stock } = req.body);
    const id = req.params.id;
    return service
        .update(obj, { id })
        .then((r) => res.json(r))
        .catch((error) => res.json("Error al ingresar datos en la tabla"));
};
const deleted = (req, res, next) => {
    const id = req.params.id;
    return service
        .deleted({ id })
        .then((r) => res.json(r))
        .catch((error) => res.json("Error al ingresar datos en la tabla"));
};
module.exports = { getAll, single, create, modify, deleted };