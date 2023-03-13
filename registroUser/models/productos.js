const bd = require("./../utils/bd");

const getAll = () => bd("productos").select("*");

const getSingle = (id) =>
    bd("productos")
    .where({ id, habilitado: true })
    .select("id", "nombre", "precio", "stock");

// {nombre : 'franco',apellido,mail,telefono}
// insert return PK del elemento creado
const modify = (id, obj) => bd("productos").where({ id }).update(obj);

const deleted = ({ id }) => {
    return bd("productos").where({ id }).delete();
};

const create = (obj) => {
    return bd("productos").insert(obj);
};

const createImages = (obj) => {
    return bd("producto_imagenes").insert(obj);
};

// Row data
module.exports = { getAll, getSingle, modify, deleted, create, createImages };