const req = require("express/lib/request");
const res = require("express/lib/response");
const service = require("../models/personas");

/*  
//opcion 1 con async await
 const data = await service.get();

 res.json(data); */

//nota al return lo pongo para poder usarlo en otra funcion como callback

const getAll = (req, res, next) => {
    return service
        .get()
        .then((r) => res.json(r))
        .catch((error) => res.status(500).res.json("Error interno de servidor"));
};

const single = (req, res, next) => {
    return service
        .get({ idpersonas: req.params.id })
        .then((r) => res.json(r))
        .catch((error) => res.status(500).res.json("Error interno de servidor"));
};

const create = (req, res, next) => {
    const obj = ({ nombre, apellido, edad, correo, usuario, pasword } = req.body);
    return service
        .create(obj)
        .then((r) => res.json(r))
        .catch((error) => res.json("Error al ingresar datos en la tabla"));
};

const modify = (req, res, next) => {
    const obj = ({ nombre, apellido, edad, correo, usuario, password } =
        req.body);

    //idpersonas = req.params.id;

    return service
        .update(obj, { idpersona: req.params.id })
        .then((r) => res.json(r))
        .catch((error) => res.status(500).res.json("internal server error"))
        .catch((error) => res.json("Error para modificar los datos" + error));
};

const delet = (req, res, next) => {
    idpersona = req.params.id;
    return service
        .delet({ idpersona })
        .then((r) => res.json(r))
        .catch((error) => res.status(500).res.json("internal server error"))
        .catch((error) => res.json("Error para eliminar" + error));
};

module.exports = { getAll, single, create, modify, delet };