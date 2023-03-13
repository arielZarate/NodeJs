const bd = require("./../utils/bd");

const getAll = () => bd("personas").select("*");
const getSingle = (id) =>
    bd("personas")
    .where({ id, habilitado: true })
    .select("id", "nombre", "apellido", "correo");

// {nombre : 'franco',apellido,mail,telefono}
// insert return PK del elemento creado
const modify = (id, obj) => bd("personas").where({ id }).update(obj);

const deleted = ({ id }) => {
    return bd("personas").where({ id }).delete();
};
// Row data
module.exports = { getAll, getSingle, modify, deleted };