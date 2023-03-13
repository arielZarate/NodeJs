const bd = require("../utils/bd");

const all = () => bd("usuarios").select("*");

/* const get = (id) =>
  bd(`${T.PERSONAS}`)
    .join(`${T.USUARIOS}`, "personas.id", "usuarios.idPersona")
    .where("usuarios.id", id)
    .andWhere("usuarios.habilitado", true)
    .select("usuario", "nombre", "apellido", "mail", "telefono");
 */
const getById = (id) =>
    bd("usuarios")
    .join("personas", "personas.id", "usuarios.id_persona")
    .where("usuarios.id_usuario", id)
    .andWhere("usuarios.habilitado", true)
    .select("id", "nombre", "apellido", "correo", "id_usuario", "usuario");

// update usuarios set {obj} where id = id or confirmacionCorreo = {}

const update = ({ id_usuario = false, obj, uidCorreo = {} }) =>
    bd("usuarios").where({ id_usuario }).orWhere({ uidCorreo }).update(obj);

module.exports = { update, getById, all };